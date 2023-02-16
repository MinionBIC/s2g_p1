import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  constructor(private http: HttpClient) { }

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/users/new';

    return this.http.post<any>(path, user, {headers: headers});
  }

  loginUser(user){
    
  }
}
