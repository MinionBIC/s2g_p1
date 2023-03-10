import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.scss']
})
export class CheckInComponent implements OnInit {

  constructor(private checkInService: CheckInService, private Router: Router) { }

  mode : string = 'login';  
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

  submitLogin(form: NgForm) {
    

    let user = {      
      "password": form.value.loginPw,
      "email": form.value.loginEmail
    };

    this.checkInService.loginUser(user).subscribe((e) => {
      

      this.success = e.success;
      this.msg = e.msg;

      if(this.success) {
        // const subscription = timer(2000).subscribe(()=> {this.Router.navigate(['/home']);}) 
        localStorage.setItem('user_id', e.id);
        this.Router.navigate(['/home/' + e.id]);
      }
    })


  }

  submitRegister(form: NgForm) {
    

    let user = {
      "name": form.value.registerName,
      "password": form.value.registerPw,
      "email": form.value.registerEmail
    };

    this.checkInService.registerUser(user).subscribe((e) => {
      
      this.success = e.success;
      this.msg = e.msg;

      if(this.success) { this.mode = 'login'}
    })
  }
}
