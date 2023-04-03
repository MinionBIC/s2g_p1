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

  @Output() getSurveyEvent = new EventEmitter<string>();

  currIdx;

  cat_mode;

  constructor() { }

  ngOnInit(): void {
    this.setExample()
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

  getJson(value: string) {
    this.getSurveyEvent.emit(value);
  }

  goToFirst(){
    this.currIdx = 0;
  }

  getText(categoryForm: NgForm, titleForm: NgForm){
    let cat = categoryForm.value.surveyCategory;
    let tit = titleForm.value.surveyTitle;

    let elements = {
      elements: [{
        name: "test",
        title: tit,
        type: cat
      }]
    }

    this.surveyJson = elements;    
  }

  changeCategory(value){
      switch(value.selectedStep.label){
        case 'text': {
          this.cat_mode = 'text';
          break;
        }
        case 'option': {
          this.cat_mode = 'option';
          break;
        }
      }
      
      
  }
}
