const express = require("express");
const EmployeeController = require("../controllers/employees");
const router = express.Router();

router.post("/login", EmployeeController.employeeLogin);

router.post("/createEmployee", EmployeeController.createEmployee);

router.put("/employee/:id", EmployeeController.updateEmployee);

router.get("", EmployeeController.getAllEmployees);

router.get("/employee/:id", EmployeeController.getEmployee)

router.delete("/employee/:id", EmployeeController.deleteEmployee);


module.exports = router;