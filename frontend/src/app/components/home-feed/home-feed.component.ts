import { Component, Input, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-home-feed',
  templateUrl: './home-feed.component.html',
  styleUrls: ['./home-feed.component.scss']
})
export class HomeFeedComponent implements OnInit {

  @Input() id;

  mySurveys; 

  otherSurveys;

  constructor(private SurveyService: SurveyService) { }

  ngOnInit(): void {
    this.SurveyService.getUserSurveys(this.id).subscribe((e) => {
      this.mySurveys = e;
      console.log(this.mySurveys)
    });

    this.SurveyService.getOtherSurveys(this.id).subscribe((e) => {
      this.otherSurveys = e;
      console.log(this.mySurveys)
    });

  }

}
