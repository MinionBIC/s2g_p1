import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,  ActivatedRoute } from '@angular/router';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-survey-create',
  templateUrl: './survey-create.component.html',
  styleUrls: ['./survey-create.component.scss']
})
export class SurveyCreateComponent implements OnInit {

  id;

  constructor(private Router: Router, private activatedRoute: ActivatedRoute, private SurveyService:SurveyService) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((e) => {
      let id = e.get('id');

      this.id = id;
   })

  }

  submitSurvey(title_form: NgForm, cat_form: NgForm){

    console.log(title_form);
    console.log(cat_form)

    let survey = {
       title : title_form.value.surveyTitle,
       creator: this.id
    };

    this.SurveyService.createSurvey(survey).subscribe((e) => {

      console.log(e);
      console.log(this.id)

       if(e.success) {
         this.Router.navigate(['/home/' + this.id]);
         
       }
    })
  }

}
