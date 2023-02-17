import { Component, Input, OnInit } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-home-head',
  templateUrl: './home-head.component.html',
  styleUrls: ['./home-head.component.scss']
})
export class HomeHeadComponent implements OnInit {

  @Input() id;

  userData;

  constructor(private checkInService: CheckInService) { }

  ngOnInit(): void {
    this.checkInService.getUserData(this.id).subscribe((e) => {
      this.userData = e.data;
    })
  }

}
