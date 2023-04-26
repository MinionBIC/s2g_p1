import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm, RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-text-question',
  templateUrl: './text-question.component.html',
  styleUrls: ['./text-question.component.scss']
})
export class TextQuestionComponent implements OnInit {

  current_question;

  surveyJson;

  txtValue;

  state;
  msg;
  action_text;

  inputType = 'any';
  isRequired = false;

  @Output() getValueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.txtValue = null;
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
        "title": form.value.textValue
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

    this.current_question.inputType = this.inputType;
    this.current_question.isRequired = this.isRequired;    

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
