import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rating-question',
  templateUrl: './rating-question.component.html',
  styleUrls: ['./rating-question.component.scss']
})
export class RatingQuestionComponent implements OnInit {

  current_question;

  state;
  msg;
  action_text;

  currOptText;

  currOptions = [];

  isRequired;
  styleType = 'default';

  minRateText;
  maxRateText;

  surveyJson;

  @Output() getValueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addOption(value: string){
    this.currOptions.push(value);    
    this.currOptText = '';
  }

  clearOption(){
    this.currOptions = [];
  }

  setQuestion(form: NgForm){  

     //hacky lol
     if(!(this.checkInput(form.value.textValue))) {

      this.state = "err";
      this.msg = "err set: txt null";
      return;
    }

    this.buildQuestion(form);
  }

  private buildQuestion(form: NgForm) {
    this.current_question = {
      "name": "test",
      "type": "rating",
      "title": form.value.textValue
    };

    if (this.styleType != "default") {
      this.current_question.displayMode = this.styleType;
    }

    this.current_question.isRequired = this.isRequired;

    // if(this.styleType != "default") {
    //   this.current_question.displayMode = this.styleType;
    // }
    if (this.minRateText != null) {
      this.current_question.minRateDescription = this.minRateText;
    }

    if (this.maxRateText != null) {
      this.current_question.maxRateDescription = this.maxRateText;
    }

    this.state = 'set';
  }

  preview(form: NgForm) {

    this.buildQuestion(form);

    this.surveyJson = {      
      elements: [this.current_question]
    }
  }

  sendValue(form: NgForm){   

    this.buildQuestion(form);

    this.getValueEvent.emit(this.current_question)
    this.clearValues(form);

    this.msg = "success set: " + this.current_question.name + ' ' + this.current_question.state;
    this.action_text = "add another question"
  }

  checkInput(value: string) {
    if(value == null || value == '') { return false}
    return true

  }

  clearValues(form: NgForm){
    this.current_question = null;    
    this.state = null;
    this.msg = null;
    this.surveyJson = null;
    form.resetForm();
  }
}
