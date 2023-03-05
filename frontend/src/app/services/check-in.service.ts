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
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/users/userCheck';

    return this.http.post<any>(path, user, {headers: headers});
  }

  getUserData(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/users/' + id + '/data';

    return this.http.get<any>(path, {headers: headers});
  }

  getUsername(id) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    let path = 'http://localhost:3000/users/' + id + '/username';

    return this.http.get<any>(path, {headers: headers});
  }
}
