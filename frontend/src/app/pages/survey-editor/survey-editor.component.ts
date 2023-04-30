import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.scss']
})



export class SurveyEditorComponent implements OnInit {

  constructor() { }

  surveyJson;

  mode = 'current';

  ngOnInit(): void {
    this.surveyJson = {
      elements: []
    }
  }  

  goToEditor(){
    this.mode = 'editor';    
  }

  goToPreview(){
    this.mode = 'preview';
  }

  goToCurrentElements(){
    this.mode = 'current';
  }
  
  getSurvey(value: string){
    this.surveyJson = value;
    this.goToPreview();
  }

  addElementToSurvey(value){
    	this.surveyJson.elements.push(value);
  }
}
