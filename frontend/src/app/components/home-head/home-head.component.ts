import { Component, Input, OnInit } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-home-head',
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.scss']
})
export class HomeHeadComponent implements OnInit {

  @Input() id;

  userData;

  userName;

  constructor(private checkInService: CheckInService, private SurveyService: SurveyService) { }

  ngOnInit(): void {
    this.checkInService.getUserData(this.id).subscribe((e) => {
      this.userData = e.data;
    })

    
  }

}
 