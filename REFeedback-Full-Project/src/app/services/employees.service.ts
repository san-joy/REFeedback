import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EmployeeData } from '../models/employee-data.model';
import { Subject } from 'rxjs';

const BACKEND_URL = environment.apiUrl + "/employees/";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private employees: EmployeeData[] = [];
  private employeesUpdated = new Subject<{ employees: EmployeeData[]; employeeCount: number }>();

constructor(private http: HttpClient, private router: Router) { }

  getAllEmployees(employeesPerPage: number, currentPage: number){
    const queryParams = `?pagesize=${employeesPerPage}&page=${currentPage}`;
    return this.http.get<{message: string; employees: any; maxEmployees: number}>(BACKEND_URL + queryParams)
        .pipe(map(employeesDate => {
          return {
            employees: employeesDate.employees.map(employee => {
              return{
                id: employee._id,
                fullname: employee.fullname,
                email: employee.email,
                password: employee.password,
                position: employee.position
              };
            }),
            maxEmployees: employeesDate.maxEmployees
          };
        }))
        .subscribe(transformedEmployeeData => {
          this.employees = transformedEmployeeData.employees;
          this.employeesUpdated.next({
            employees: [...this.employees],
            employeeCount: transformedEmployeeData.maxEmployees
          });
        },
        error => {
          console.log('Error retrieving data.');
        })
  }

  getEmployeeUpdateListener() {
    return this.employeesUpdated.asObservable();
  }

  getEmployee(id: string) {
    return this.http.get<{
      _id: string;
      fullname: string;
      email: string;
      password: string;
      position: string;
    }>(BACKEND_URL + "/employee/" +id);
  }

  createEmployee(fullname: string, email: string, password: string, position: string) {
    const employeeData = {fullname: fullname, email: email, password: password, position: position};
    this.http.post<{ message: string; employee: EmployeeData }>(BACKEND_URL + "/createEmployee/", employeeData).subscribe(
      responseData => {
        this.router.navigate(["/employeeManagement"]);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateEmployee(id: string, fullname: string, email: string, password: string, position: string) {
    let employeeData: EmployeeData | FormData;
    employeeData = {
      id: id,
      fullname: fullname,
      email: email,
      password: password,
      position: position
    };
    this.http
      .put(BACKEND_URL + "/employee/" + id, employeeData)
      .subscribe(response => {
        this.router.navigate(["/employeeManagement"]);
      });
  }

  deleteEmployee(id: string){
    return this.http.delete(BACKEND_URL + "/employee/" + id);
  }

}
