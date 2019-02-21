const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Employee = require("../models/employees");

exports.createEmployee = (request, response) => {
    bcrypt.hash(request.body.password, 10).then(hash => {
      const employee = new Employee({
        fullname: request.body.fullname,
        email: request.body.email,
        password: hash,
        position: request.body.position
      });
      employee.save()
        .then(result => {   
          response.status(201).json({
            message: "Employee created!",
            employee: {
              ...result,
              id: result._id
            }
          });
        })
        .catch(error => {
          response.status(500).json({
            message: "Email already exist!"
          });
        });
    });
  }

  exports.employeeLogin = (request, response) => {
    let fetchedEmployee;
    Employee.findOne({ email: request.body.email })
      .then(employee => {
        if (!employee) {
          return response.status(401).json({
            message: "No record found!"
          });
        }
        fetchedEmployee = employee;
        return bcrypt.compare(request.body.password, fetchedEmployee.password);
      })
      .then(result => {
        if (!result) {
          return response.status(401).json({
            message: "Login Failed!"
          });
        }
        const token = jwt.sign(
          { email: fetchedEmployee.email, employeeId: fetchedEmployee._id, employeePermission: fetchedEmployee.permission, employeeFullname: fetchedEmployee.fullname },
          'key',
          { expiresIn: "1h" }
        );
        response.status(200).json({
          token: token,
          expiresIn: 3600,
          employeeId: fetchedEmployee._id
        });
      })
      .catch(error => {
        return response.status(401).json({
          message: "Invalid Details!"
        });
      });
  }

  exports.getAllEmployees = (request, response) => {
    const pageSize =+ request.query.pagesize;
    const currentPage =+ request.query.page;
    const getEmployeeQuery = Employee.find();
    let fetchedEmployees;
    if (pageSize && currentPage) {
      getEmployeeQuery.skip(pageSize * (currentPage - 1)).limit(pageSize);
    }
    getEmployeeQuery
      .then(documents => {
        fetchedEmployees = documents;
        return Employee.estimatedDocumentCount();
      })
      .then(count => {
        response.status(200).json({
          message: "Employees fetched successfully!",
          employees: fetchedEmployees,
          maxEmployees: count
        });
      })
      .catch(error => {
        response.status(500).json({
          message: "Fetching employees failed!"
        });
      });
  };

  exports.getEmployee = (request, response) => {
    Employee.findById(request.params.id)
      .then(employee => {
        console.log(employee);
        if(employee) {
          response.status(200).json(employee);
        } else {
          response.status(404).json({ message: "Employee is not found!" });
        }
      })
      .catch(error => {
        res.status(500).json({
          message: "Fetching employee failed!"
        });
      });
  }

  exports.updateEmployee = (request, response) => {
    bcrypt.hash(request.body.password, 10).then(hash => {
    const employee = new Employee({
      _id: request.body.id,
      fullname: request.body.fullname,
      email: request.body.email,
      password: hash,
      position: request.body.position
    });
    Employee.updateOne({ _id: request.params.id }, employee)
      .then(result => {
        if (result.n > 0) {
          response.status(200).json({
            message: "Update successful!"
          });
        } else {
          response.status(401).json({
            message: "Update unsuccessful!"
          });
        }
      })
      .catch(error => {
        response.status(500).json({
          message: "Couldn't udpate employee!"
        });
      });
    });
  };

  exports.deleteEmployee = (request, response) => {
    Employee.findByIdAndRemove(request.params.id)
      .then(employee => {
        if(!employee){
          return response.status(401).json({
            message: "Something went wrong"
          });
        } else {
          return response.status(200).json({
            message: "Employee is deleted"
          });
        }
      })
      .catch(error => {
        response.status(500).json({
          message: "Couldn't delete employee!"
        });
      });
  }