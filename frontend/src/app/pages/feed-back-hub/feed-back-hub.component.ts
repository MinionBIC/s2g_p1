import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feed-back-hub',
  templateUrl: './feed-back-hub.component.html',
  styleUrls: ['./feed-back-hub.component.scss']
})
export class FeedBackHubComponent implements OnInit {

  tickets;

  constructor(private Router: Router, private FeedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.FeedbackService.getAllFeedback().subscribe((e) => {
      this.tickets = e;
    })
  }
  

  backToHome(){
    let id = localStorage.getItem('user_id')
    this.Router.navigate(['/home/' + id])
  }

}
