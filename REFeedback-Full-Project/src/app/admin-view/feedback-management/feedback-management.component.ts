import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { EmployeesService } from '../../services/employees.service';
import { EmployeeData } from '../../models/employee-data.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feedback-management',
  templateUrl: './feedback-management.component.html',
  styleUrls: ['./feedback-management.component.css']
})
export class FeedbackManagementComponent implements OnInit, OnDestroy {
  currentPage = 1;
  totalEmployees = 5;
  employeesPerPage = 5;
  pageSizeOptions = [5, 10, 20, 50, 100, 500];

  employees: EmployeeData[] = [];
  private employeesSubscription: Subscription;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['feedback-receiver', 'action'];

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
    this.employeesSubscription = this.employeesService
    .getEmployeeUpdateListener()
    .subscribe((employeeData: { employees: EmployeeData[], employeeCount:number }) => {
      this.totalEmployees = employeeData.employeeCount;
      this.employees = employeeData.employees;
      this.listData = new MatTableDataSource(this.employees);
    });
  }

  onChangedPage(pageData: PageEvent) {
    this.currentPage = pageData.pageIndex + 1;
    this.employeesPerPage = pageData.pageSize;
    this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
  }

  ngOnDestroy() {
    this.employeesSubscription.unsubscribe();
  }

}
