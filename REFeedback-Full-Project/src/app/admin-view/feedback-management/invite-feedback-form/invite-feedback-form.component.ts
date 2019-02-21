import { FeedbackService } from '../../../services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeData } from '../../../models/employee-data.model';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-invite-feedback-form',
  templateUrl: './invite-feedback-form.component.html',
  styleUrls: ['./invite-feedback-form.component.css']
})
export class InviteFeedbackFormComponent implements OnInit {
  currentPage = 1;
  totalEmployees = 5;
  employeesPerPage = 5;
  pageSizeOptions = [5, 10, 20, 50, 100, 500];
  
  employeeId: string;
  employee: EmployeeData;
  employeeName: string;
  private employeesSubscription: Subscription;
  employees: EmployeeData[] = [];
  form: FormGroup;
  selectedEmployeeNameArray = [];
  getFeedbackReceiverDate = [];

  constructor(
    private employeesService: EmployeesService,
    public activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
    private router: Router,
    private notificationService: NotificationService,
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      feedbackProvider: new FormArray ([
        new FormControl(null),
        new FormControl(null)
      ])
    });

    this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
    this.employeesSubscription = this.employeesService
    .getEmployeeUpdateListener()
    .subscribe((employeeData: { employees: EmployeeData[], employeeCount:number }) => {
      this.totalEmployees = employeeData.employeeCount;
      this.employees = employeeData.employees;
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.employeeId = paramMap.get('id');
        this.employeesService.getEmployee(this.employeeId).subscribe(employeeData => {
          if(paramMap.has('id')){
            this.employeeName = employeeData.fullname;
            this.employeeId = employeeData._id;
          }
        });
      });
  }

  checkbox(e:any, empName:any){
    if(e.checked && empName.value != ""){
      let selectedEmployee = empName.value.id;
      this.selectedEmployeeNameArray.push(selectedEmployee);
    }
    if(!e.checked){
      let index = this.selectedEmployeeNameArray.findIndex(i => i.id === empName.value.id);
      if(index > -1){
        this.selectedEmployeeNameArray.splice(index, 1);
      }
    }
  }

  onSubmit(){
    this.selectedEmployeeNameArray.forEach((value, key) => {
      let formData = {receiverId: this.employeeId, providerId: value};
      this.feedbackService.inviteToGiveFeedback(formData).subscribe(response => {
        this.router.navigate(["/feedbackManagement"]);
        this.notificationService.onSuccess('Invitation sent successfully!');
      },
      error => {
        console.log(error);
      });
    })
  }
}
