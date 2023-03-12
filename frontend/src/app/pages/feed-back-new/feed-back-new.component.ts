import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckInService } from 'src/app/services/check-in.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-feed-back-new',
  templateUrl: './feed-back-new.component.html',
  styleUrls: ['./feed-back-new.component.scss']
})
export class FeedBackNewComponent implements OnInit {

  location;
  user;

  title;
  category;
  description;

  constructor(private FeedbackService: FeedbackService, private router: Router, private CheckInService: CheckInService) { }

  ngOnInit(): void {
     this.location = localStorage.getItem('last-location');
     let user_id = localStorage.getItem('user_id');
     this.CheckInService.getUsername(user_id).subscribe((e) => {this.user = e.username})
  }

  createFeedback(){
    // console.log(this.title);
    // console.log(this.category);
    // console.log(this.description);

    let feedback = {
      "creator" : localStorage.getItem('user_id'),
      "title": this.title,
      "location": this.location,     
      "category" : this.category,
      "description": this.description
    }

    this.FeedbackService.createFeedback(feedback).subscribe((e) => {
      

      if(e.success){
        this.router.navigate(['/feedback-hub']);      
      }

    })
  }

}
