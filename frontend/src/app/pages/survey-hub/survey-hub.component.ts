import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-hub',
  templateUrl: './survey-hub.component.html',
  styleUrls: ['./survey-hub.component.scss']
})
export class SurveyHubComponent implements OnInit {

  id;
  user_id;

  data;
  survey_owner;
  isOP;

  constructor(private Router:Router, private activatedRoute: ActivatedRoute, private SurveyService: SurveyService) { }

  ngOnInit(): void {
    this.user_id = localStorage.getItem('user_id');
    this.activatedRoute.paramMap.subscribe((e) => {
      this.id = e.get('id');
      this.SurveyService.getSurveyData(this.id).subscribe((e) => {
        this.data = e;
        this.SurveyService.getSurveyCreatorUsername(e.creator_id).subscribe((e) => {
          this.survey_owner = e.username;
        })

        if(this.data.creator_id == this.user_id){
          this.isOP = 'OP';
        }
      });
      
    })
  }

  backToHome(){
    this.Router.navigate(['/home/' + this.user_id])
  }


}
