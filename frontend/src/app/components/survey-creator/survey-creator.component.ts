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

  surveyCategory = 'opt';

  constructor() { }

  curr_elements = [];

  curr_opt = [];

  textValue;

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
      }, {
        name: "gender",
        title: "Choose your gender",
        type: "dropdown",
        choises: ["male", "alpha", "beta", "apache helicopter", "brot"]
      }
    ]
    };   
  }

  getJson() {    
    this.setSurveyJson();
    this.getSurveyEvent.emit(this.surveyJson);
  }

  buildElementFromText(textForm: NgForm) {
    let curr_element = {
      name: 'dummy_' + this.curr_elements.length.toString(),
      title: textForm.value.textValue,
      type: "text"
    };

    this.curr_elements.push(curr_element);
  }

  buildElementFromCheck(checkForm: NgForm) {

  }

  buildElementFromOpt(optForm: NgForm) {

  }

  addOption(option: string){
    this.curr_opt.push(option);
    console.log(option);
    console.log(this.curr_opt);
  }

  setSurveyJson(){
    this.surveyJson = {
      elements: this.curr_elements
    }
  }

}
