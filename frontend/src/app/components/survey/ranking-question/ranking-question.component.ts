import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ranking-question',
  templateUrl: './ranking-question.component.html',
  styleUrls: ['./ranking-question.component.scss']
})
export class RankingQuestionComponent implements OnInit {

  current_question;

  state;
  msg;
  action_text;

  currOptText;

  currOptions = [];

  isRequired;

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
      "type": "ranking",
      "title": form.value.textValue,
      "choices": this.currOptions
    };

    this.current_question.isRequired = this.isRequired;

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
