import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

constructor(public notification: MatSnackBar) { }

animationConfigaration: MatSnackBarConfig = {
  duration: 2500,
  horizontalPosition: 'right',
  verticalPosition: 'bottom'
}

onSuccess(message:string){
  this.animationConfigaration['panelClass'] = ['notification', 'success'];
  this.notification.open(message, '', this.animationConfigaration);
}

warning(message:string){
  this.animationConfigaration['panelClass'] = ['notification', 'warning'];
  this.notification.open(message, '', this.animationConfigaration);
}

}
