import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  constructor(private checkInService: CheckInService) { }

  mode : string = 'register';  
  success : boolean;
  msg : string;

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

  submitRegister(form: NgForm) {
    console.log('register');

    console.log(form.value);

    let user = {
      "name": form.value.registerName,
      "password": form.value.registerPw,
      "email": form.value.registerEmail
    };

    this.checkInService.registerUser(user).subscribe((e) => {
      console.log(e);

      this.success = e.success;
      this.msg = e.msg;

      if(this.success) { this.mode = 'login'}
    })
  }
}
