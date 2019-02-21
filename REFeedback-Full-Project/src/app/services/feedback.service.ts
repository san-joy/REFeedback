import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FeedbackData } from '../models/feedback-data.model';

const BACKEND_URL = environment.apiUrl + "/feedback/";
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

constructor(private http: HttpClient, private router: Router) { }

inviteToGiveFeedback(formData: any){
  return this.http.post(BACKEND_URL + "inviteToGiveFeedback", formData);
}

getFeedbackReceiver(id: string) {
  return this.http.get<{ _id: string; receiverId: string; providerId:string; }>(BACKEND_URL + "/feedbackReceiver/" + id);
}

getFeedbackProvider(id: string){
  return this.http.get<{ _id: string; receiverId: string; providerId:string; }>(BACKEND_URL + "/feedbackProvider/" + id);
}

employeeFeedbackReceiver(id: string, feedback: string,) {
  let feedbackData = {
    id: id,
    feedback: feedback,
  };
  console.log(feedbackData);
  this.http
    .put(BACKEND_URL + "/feedbackReceive/" + id, feedbackData)
    .subscribe(response => {
      this.router.navigate(["/feedbackAssignment"]);
    });
}

}
