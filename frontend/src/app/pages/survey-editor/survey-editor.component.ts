import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.scss']
})



export class SurveyEditorComponent implements OnInit {

  constructor() { }

  surveyJson;


  ngOnInit(): void {
    this.setExample();
  }

  setExample() {
    this.surveyJson = {
      elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
      }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
      }]
    };
  }

}
