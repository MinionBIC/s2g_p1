import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bool-question',
  templateUrl: './bool-question.component.html',
  styleUrls: ['./bool-question.component.scss']
})
export class BoolQuestionComponent implements OnInit {


  current_question;

  state;
  msg;
  action_text;

  isRequired;

  inputType;

  surveyJson;

  yes_label = "Yes";
  no_label = "no";
  style_value = "default";

  @Output() getValueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clearForm(form: NgForm){
    
    
    this.clearValues(form);
    
  }

  clearValues(form: NgForm){
    this.current_question = null;    
    this.state = null;
    this.msg = null;
    this.surveyJson = null;
    form.resetForm();
  }

  addQuestion(form: NgForm){    

    console.log(form.value.textValue)

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
      "type": "boolean",
      "title": form.value.textValue
    };

    this.current_question.isRequired = this.isRequired;

    this.current_question.valueTrue = this.yes_label;
    this.current_question.valueFalse = this.no_label;

    if (this.style_value == 'radio') {
      this.current_question.renderAs = 'radio';
    };


    this.state = "set";
    this.msg = "success set question type: " + this.current_question.type;
    this.action_text = "now add question to Survey or watch the preview of your question (without optional settings currently)";
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

    // this.msg = "success set: " + this.current_question.name + ' ' + this.current_question.state;
    // this.action_text = "add another question"
  }

  checkInput(value: string) {
    if(value == null || value == '') { return false}
    return true

  }

}
