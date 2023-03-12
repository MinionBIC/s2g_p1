import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(public Router: Router) {}

  createFeedback(){
    localStorage.setItem('last-location', this.Router.url);
    this.Router.navigate(['/feedback-new'] );
  }
}
