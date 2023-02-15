import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  constructor() { }

  mode : string = 'register';  

  ngOnInit(): void {
  }

  goToLogin(){
    this.mode = 'login';
  }

  goToRegister() {
    this.mode = 'register';
  }

  submitLogin() {
    console.log('login');
  }

  submitRegister() {
    console.log('register');
  }
}
