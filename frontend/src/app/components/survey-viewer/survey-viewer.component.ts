import { Component, OnInit, Input } from '@angular/core';
import { Model } from "survey-core"

@Component({
  selector: 'app-survey-viewer',
  templateUrl: './survey-viewer.component.html',
  styleUrls: ['./survey-viewer.component.scss']
})
export class SurveyViewerComponent implements OnInit {

  @Input() surveyJson;

  surveyModel: Model;

  constructor() { }

  ngOnInit(): void {
    const survey = new Model(this.surveyJson);
    this.surveyModel = survey;
  }
  

}
