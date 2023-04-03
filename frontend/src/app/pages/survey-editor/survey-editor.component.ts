import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-survey-editor',
  templateUrl: './survey-editor.component.html',
  styleUrls: ['./survey-editor.component.scss']
})



export class SurveyEditorComponent implements OnInit {

  constructor() { }

  surveyJson;

  mode = 'editor';

  ngOnInit(): void {
    
  }  

  goToEditor(){
    this.mode = 'editor';
    this.surveyJson = '';
  }

  goToPreview(){
    this.mode = 'preview';
  }
  
  getSurvey(value: string){
    this.surveyJson = value;
    this.goToPreview();
  }

}
