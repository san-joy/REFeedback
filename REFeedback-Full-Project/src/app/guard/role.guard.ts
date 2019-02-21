import { JwtHelperService } from '@auth0/angular-jwt';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from '../services/auth.service';
  
  @Injectable()
  export class RoleGuard implements CanActivate {

    jwtHelper = new JwtHelperService();
    decodedToken: any;

    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot
    ): boolean {
      const isAuth = this.authService.getIsAuth(); 
      const token = localStorage.getItem('token');
      this.decodedToken = this.jwtHelper.decodeToken(token);

      if (!isAuth || this.decodedToken.employeePermission !== "admin") {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
  
  }
  