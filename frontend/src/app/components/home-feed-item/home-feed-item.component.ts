import { Component, OnInit, Input } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';

@Component({
  selector: 'app-home-feed-item',
  templateUrl: './home-feed-item.component.html',
  styleUrls: ['./home-feed-item.component.scss']
})
export class HomeFeedItemComponent implements OnInit {

  @Input() item;

  creator_name;
  
  constructor(private SurveyService: SurveyService) { }

  ngOnInit(): void {
    this.SurveyService.getSurveyCreatorUsername(this.item.creator_id).subscribe((e) => {
      //console.log(e);
      this.creator_name = e.username;
    })
  }

}
