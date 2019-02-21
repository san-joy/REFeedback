import { EmployeeData } from '../../../models/employee-data.model';
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public mode = 'Add employee';
  private employeeId: string;
  employee: EmployeeData;
  form: FormGroup;

  constructor(private employeesService: EmployeesService,
              public activatedRoute: ActivatedRoute,
              private router: Router) { } 

  ngOnInit() {
    this.form = new FormGroup({
      fullname: new FormControl(null, {validators: [Validators.required]}),
      email: new FormControl(null, {validators: [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]}),
      password: new FormControl(null, {validators: [Validators.required]}),
      position: new FormControl(null, {validators: [Validators.required]})
    });
    
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.mode = 'Edit employee';
        this.employeeId = paramMap.get('id');
        this.employeesService.getEmployee(this.employeeId).subscribe(employeeData => {
          this.employee = {
            id: employeeData._id,
            fullname: employeeData.fullname,
            email: employeeData.email,
            password: employeeData.password,
            position: employeeData.position
          };
          this.form.setValue({
            fullname: this.employee.fullname,
            email: this.employee.email,
            password: this.employee.password,
            position: this.employee.position
          });
        });
      }else{
        this.mode = 'Add employee';
        this.employeeId = null;
      }
    });
  }

  onSubmit(){
    if(this.form.invalid){
      return;
    }
    if(this.mode === 'Add employee'){
      this.employeesService.createEmployee(
          this.form.value.fullname,
          this.form.value.email,
          this.form.value.password,
          this.form.value.position);
    }else{
      this.employeesService.updateEmployee(
          this.employeeId,
          this.form.value.fullname,
          this.form.value.email,
          this.form.value.password,
          this.form.value.position);
    }
  }

}
