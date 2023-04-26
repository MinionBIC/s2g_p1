import { normalizeGenFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @Output() getValueEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.txtValue = null;
  }

  clearForm(form: NgForm){
    this.current_question = null;
    form.resetForm();
    this.state = null;
    this.msg = null;
    this.surveyJson = null;
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
    this.msg = "success set";
  }

  preview() {
    this.surveyJson = {
      elements: [this.current_question]
    }
  }

  sendValue(){   

    this.getValueEvent.emit(this.current_question)
  }

  checkInput(value: string) {
    if(value == null || value == '') { return false}
    return true

  }


}
