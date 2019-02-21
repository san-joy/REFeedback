import { EmployeesService } from '../../services/employees.service';
import { FeedbackService } from '../../services/feedback.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-feedback-assignment',
  templateUrl: './feedback-assignment.component.html',
  styleUrls: ['./feedback-assignment.component.css']
})
export class FeedbackAssignmentComponent implements OnInit {
  employeeId:string;
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  feedbackProviderName: string;
  feedbackReceivers = [];
  feedbackDbs: any;
  hideMessage: boolean = false;

  constructor(private feedbackService: FeedbackService, private employeesService: EmployeesService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.decodedToken = this.jwtHelper.decodeToken(token);

    this.employeeId = this.decodedToken.employeeId;

    this.feedbackProviderName = this.decodedToken.employeeFullname;
    
    this.feedbackService.getFeedbackProvider(this.employeeId).subscribe(response => {
      this.feedbackDbs = response;
      for(let i = 0; i < this.feedbackDbs.length; i++){
        let feedbackReceiverId = response[i].receiverId;
        this.employeesService.getEmployee(feedbackReceiverId).subscribe(result => {
          if(result){
            this.feedbackReceivers.push([result, response[i]._id]);
            console.log(this.feedbackReceivers);
            // this.feedbackReceivers.push(result);
            this.hideMessage = true;
          }
  
        })
        
      }
    })

  }

}
