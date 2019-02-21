import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Subject } from 'rxjs';
import { LoginData } from '../models/login-data.model';
import { JwtHelperService } from '@auth0/angular-jwt';


const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  private token: string;
  private tokenTimer: any;
  private employeeId: string;
  private authStatusListener = new Subject<boolean>();
  private jwtHelper = new JwtHelperService();
  private decodedToken: any;
  private employeePermission: any;

constructor(private http: HttpClient, private router: Router) { }

getToken() {
  return this.token;
}

getIsAuth() {
  return this.isAuthenticated;
}

getEmployeeId() {
  return this.employeeId;
}

getAuthStatusListener() {
  return this.authStatusListener.asObservable();
}

login(email: string, password: string) {
  const loginData: LoginData = { email: email, password: password };
  this.http.post<{ token: string; expiresIn: number; employeeId: string;}>( BACKEND_URL + "/employees/login/", loginData)
    .subscribe(response => {
        const token = response.token;
        this.token = token;

        if (token) {
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.employeeId = response.employeeId;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(
            now.getTime() + expiresInDuration * 1000
          );
          this.saveAuthData(token, expirationDate, this.employeeId);
          this.decodedToken = this.jwtHelper.decodeToken(token);
          if(this.decodedToken.employeePermission == 'admin'){
            this.router.navigate(["/employeeManagement"]); 
          }else{
            this.router.navigate(["/feedbackAssignment"]);
          }
          
        }
      },
      error => {
        this.authStatusListener.next(false);
      }
    );
}

private setAuthTimer(duration: number) {
  this.tokenTimer = setTimeout(() => {
    this.logout();
  }, duration * 1000);
}

private saveAuthData(token: string, expirationDate: Date, employeeId: string) {
  localStorage.setItem("token", token);
  localStorage.setItem("expiration", expirationDate.toISOString());
  localStorage.setItem("employeeId", employeeId);
}

autoAuthUser() {
  const authInformation = this.getAuthData();
  if (!authInformation) {
    return;
  }
  const now = new Date();
  const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
  if (expiresIn > 0) {
    this.token = authInformation.token;
    this.isAuthenticated = true;
    this.employeeId = authInformation.employeeId;
    this.setAuthTimer(expiresIn / 1000);
    this.authStatusListener.next(true);
  }
}

private getAuthData() {
  const token = localStorage.getItem("token");
  const expirationDate = localStorage.getItem("expiration");
  const employeeId = localStorage.getItem("employeeId");
  if (!token || !expirationDate) {
    return;
  }
  return {
    token: token,
    expirationDate: new Date(expirationDate),
    employeeId: employeeId
  };
}

logout() {
  this.token = null;
  this.isAuthenticated = false;
  this.authStatusListener.next(false);
  this.employeeId = null;
  clearTimeout(this.tokenTimer);
  this.clearAuthData();
  this.router.navigate(["/"]);
}

private clearAuthData() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
  localStorage.removeItem("employeeId");
}

getUserPermission(){
  const localStorageToken = localStorage.getItem('token');
  this.decodedToken = this.jwtHelper.decodeToken(localStorageToken);
  this.employeePermission = this.decodedToken.employeePermission;
}
}
