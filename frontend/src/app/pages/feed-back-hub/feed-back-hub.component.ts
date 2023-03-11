import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feed-back-hub',
  templateUrl: './feed-back-hub.component.html',
  styleUrls: ['./feed-back-hub.component.scss']
})
export class FeedBackHubComponent implements OnInit {

  mode = 'display';

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

  setModeToDisplay(){
    this.mode = 'display';
  }

  setModeToEdit(){
    this.mode = 'edit';
  }

  backToHome(){
    let id = localStorage.getItem('user_id')
    this.Router.navigate(['/home/' + id])
  }

}
