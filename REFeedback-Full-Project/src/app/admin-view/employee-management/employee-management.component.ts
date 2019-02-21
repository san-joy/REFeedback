import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeData } from 'src/app/models/employee-data.model';
import { Subscription } from 'rxjs';
import { MatTableDataSource, PageEvent } from '@angular/material';
import { EmployeesService } from '../../services/employees.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit, OnDestroy {
  currentPage = 1;
  totalEmployees = 5;
  employeesPerPage = 5;
  pageSizeOptions = [5, 10, 20, 50, 100, 500];

  employees: EmployeeData[] = [];
  private employeesSubscription: Subscription;

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullname', 'email', 'position', 'action'];

  constructor(
    private employeesService: EmployeesService,
    private notificationService: NotificationService) { }

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

  onDelete(id:any){
    this.employeesService.deleteEmployee(id).subscribe(() => {
      this.employeesService.getAllEmployees(this.employeesPerPage, this.currentPage);
      this.notificationService.warning('Employee deleted successfully')
    },
    error => {
      console.log(error);
    })
  }

  ngOnDestroy() {
    this.employeesSubscription.unsubscribe();
  }

}
