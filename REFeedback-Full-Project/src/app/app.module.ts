import { FeedbackFormComponent } from './employees-view/feedback-form/feedback-form.component';
import { FeedbackManagementComponent } from './admin-view/feedback-management/feedback-management.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EmployeeComponent } from './admin-view/employee-management/employee/employee.component';
import { EmployeeManagementComponent } from './admin-view/employee-management/employee-management.component';
import { InviteFeedbackFormComponent } from './admin-view/feedback-management/invite-feedback-form/invite-feedback-form.component';
import { FeedbackAssignmentComponent } from './employees-view/feedback-assignment/feedback-assignment.component';
import { AuthInterceptor } from './login/auth-interceptor';
import { ErrorComponent } from './error/error.component';
import { ErrorInterceptor } from './error-interceptor';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HeaderComponent,
      FooterComponent,
      EmployeeComponent,
      EmployeeManagementComponent,
      FeedbackManagementComponent,
      InviteFeedbackFormComponent,
      FeedbackAssignmentComponent,
      FeedbackFormComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ],
   entryComponents: [
      ErrorComponent
   ]
})
export class AppModule { }
