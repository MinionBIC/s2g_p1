import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TransitionCheckState } from '@angular/material/checkbox';

@Component({
  selector: 'app-survey-organizer',
  templateUrl: './survey-organizer.component.html',
  styleUrls: ['./survey-organizer.component.scss']
})
export class SurveyOrganizerComponent implements OnInit {

  @Input() curr_elements;

  mode = 'panel';

  panel_content = [];

  panelTitle;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.curr_elements, event.previousIndex, event.currentIndex);
  }

  dropPanel(event: CdkDragDrop<string[]>){
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  setModeToOrder(){
    this.mode = 'order';
  }
  setModeToPanel(){
    this.mode = 'panel';
  }

  addPanelToElements(){
    let panel = {
      "type":"panel",
      "name":"panel",
      "title": this.panelTitle,
      "elements": this.panel_content
    };

    this.curr_elements.push(panel);
  }
}
