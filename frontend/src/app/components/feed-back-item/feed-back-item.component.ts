import { Component, Input, OnInit } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-feed-back-item',
  templateUrl: './feed-back-item.component.html',
  styleUrls: ['./feed-back-item.component.scss']
})
export class FeedBackItemComponent implements OnInit {

  @Input() item;

  username;

  constructor(private CheckInService: CheckInService) { }

  ngOnInit(): void {
    this.CheckInService.getUsername(this.item.creator_id).subscribe((e) => {
      this.username = e.username;
    })
  }

}
