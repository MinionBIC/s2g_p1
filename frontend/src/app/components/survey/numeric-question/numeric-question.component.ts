import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-numeric-question',
  templateUrl: './numeric-question.component.html',
  styleUrls: ['./numeric-question.component.scss']
})
export class NumericQuestionComponent implements OnInit {

  current_question;

  state;
  msg;
  action_text;

  isRequired;

  inputType;

  num_defValue = 0;
  num_minValue = 0;
  num_maxValue = 100;

  range_defValue = 50;
  range_minValue = 0;
  range_maxValue = 100;
  range_stepValue = 10

  tel_useValidate = true;

  surveyJson;

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

    this.current_question = {
        "name": "test",
        "type": "text",        
        "title": form.value.textValue,
        "inputType": "number"
    };   
    

    this.state = "set";
    this.msg = "success set question type: " + this.current_question.type ;
    this.action_text = "now add question to Survey or watch the preview of your question (without optional settings currently)";
    
  }

  preview() {
    this.surveyJson = {      
      elements: [this.current_question]
    }
  }

  sendValue(form: NgForm){   
    
    this.current_question.isRequired = this.isRequired;    

    switch(this.inputType) {
      case 'number' : {
        this.current_question.defaultValue = this.num_defValue;
        this.current_question.min = this.num_minValue;
        this.current_question.max = this.num_maxValue;
        break;
      }
      case 'range': {
        this.current_question.inputType = 'range';
        this.current_question.defaultValue = this.range_defValue;
        this.current_question.min = this.range_minValue;
        this.current_question.max = this.range_maxValue;
        this.current_question.step = this.range_stepValue;
        break;
      }
      case 'tel': {
        this.current_question.inputType = 'tel';

        if(this.tel_useValidate) {          
            this.current_question.validators =  [{
              "type": "regex",
              "regex": "\\+[0-9]{1} \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}",
              "text": "Phone number must be in the following format: +0 (000) 000-00-00"
            }]          
        }
        break;
      }
    }

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
