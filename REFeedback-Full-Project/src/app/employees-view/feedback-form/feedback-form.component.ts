import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  feedbackForm: FormGroup;
  private feedbackId: string;

  constructor(
    public activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      feedback: new FormControl(null, {validators: [Validators.required]})
    });

    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.feedbackId = paramMap.get('id');
      }
    })
  }

  onSubmit(){
    if(this.feedbackForm.invalid){
      return;
    }
    this.feedbackService.employeeFeedbackReceiver(this.feedbackId, this.feedbackForm.value.feedback);
    this.notificationService.onSuccess('Feedback sent successfully!')
  }

}
