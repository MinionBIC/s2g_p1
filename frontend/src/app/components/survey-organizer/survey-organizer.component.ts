import { Component, Input, OnInit } from '@angular/core';

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

}
