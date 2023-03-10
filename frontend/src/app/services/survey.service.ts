import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  getUserSurveys(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/survey/my/' + user;

    return this.http.get<any>(path, {headers: headers});
  }

  getOtherSurveys(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/survey/others/' + user;

    return this.http.get<any>(path, {headers: headers});
  }

  getSurveyCreatorUsername(creator_id){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/users/' + creator_id + '/username';

    return this.http.get<any>(path, {headers: headers});
  }

  createSurvey(surveyCore){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/survey/new';

    return this.http.post<any>(path, surveyCore, {headers: headers});
  }

  getSurveyData(id){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/survey/' + id ;

    return this.http.get<any>(path, {headers: headers});
  }
}
