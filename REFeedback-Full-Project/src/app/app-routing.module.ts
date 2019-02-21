import { FeedbackAssignmentComponent } from './employees-view/feedback-assignment/feedback-assignment.component';
import { FeedbackFormComponent } from './employees-view/feedback-form/feedback-form.component';
import { AuthGuard } from './guard/auth.guard';
import { FeedbackManagementComponent } from './admin-view/feedback-management/feedback-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EmployeeComponent } from './admin-view/employee-management/employee/employee.component';
import { EmployeeManagementComponent } from './admin-view/employee-management/employee-management.component';
import { InviteFeedbackFormComponent } from './admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component';
import { RoleGuard } from './guard/role.guard';

const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "employeeManagement", component: EmployeeManagementComponent, canActivate:[RoleGuard]},
    { path: "addEmployee", component: EmployeeComponent, canActivate:[RoleGuard]},
    { path: "edit/:id", component: EmployeeComponent, canActivate:[RoleGuard]},
    { path: "feedbackManagement", component: FeedbackManagementComponent, canActivate:[RoleGuard]},
    { path: "feedback/:id", component: InviteFeedbackFormComponent, canActivate:[RoleGuard]},
    { path: "feedbackForm/:id", component: FeedbackFormComponent, canActivate:[AuthGuard]},
    { path: "feedbackAssignment", component: FeedbackAssignmentComponent, canActivate:[AuthGuard]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, RoleGuard]
})

export class AppRoutingModule {}