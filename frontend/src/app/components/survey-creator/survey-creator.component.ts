import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey-creator',
  templateUrl: './survey-creator.component.html',
  styleUrls: ['./survey-creator.component.scss']
})
export class SurveyCreatorComponent implements OnInit {
  
  surveyJson;
  curr_elements = [];

  

  @Output() getSurveyEvent = new EventEmitter<string>();

  surveyCategory = 'text';

  // constructor() { }

  

  // curr_opt = [];

  // textValue;

  ngOnInit(): void {
     //this.setExample()
     
  }

  // setExample() {  
  //   this.curr_elements = [{
  //       "name": "FirstName",
  //       "title": "Enter your first name:",
  //       "type": "text"
  //     }, {
  //       "name": "LastName",
  //       "title": "Enter your last name:",
  //       "type": "text"
  //     }, {
  //       "name": "gender",
  //       "title": "Choose your gender",
  //       "type": "dropdown",
  //       "showOtherItem": true,
  //       "choices": ["male", "alpha", "beta", "apache helicopter", "brot"]
  //     }
  //   ];   
  // }

  setSurveyJson(){
    this.surveyJson = {
      elements: this.curr_elements
    }
  }

  getJsonExample() {    
    this.setSurveyJson();
    this.getSurveyEvent.emit(this.surveyJson);
  }

  getTextQuestion(value){
    this.curr_elements.push(value)
  }

}
