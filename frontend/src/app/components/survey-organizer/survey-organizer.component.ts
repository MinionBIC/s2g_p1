import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-survey-organizer',
  templateUrl: './survey-organizer.component.html',
  styleUrls: ['./survey-organizer.component.scss']
})
export class SurveyOrganizerComponent implements OnInit {

  @Input() curr_elements;

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.curr_elements, event.previousIndex, event.currentIndex);
  }
}
