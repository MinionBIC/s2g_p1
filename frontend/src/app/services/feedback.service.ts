import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http: HttpClient) { }

  createFeedback(feedback) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/feedback/new';

    return this.http.post<any>(path, feedback, {headers: headers});
  }

  getAllFeedback() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/feedback/all';

    return this.http.get<any>(path, {headers: headers});
  }
}

