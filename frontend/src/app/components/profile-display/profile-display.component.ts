import { Component, Input, OnInit } from '@angular/core';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit {

  @Input() id

  data;

  constructor(private CheckInService: CheckInService) { }

  ngOnInit(): void {

    this.CheckInService.getUserData(this.id).subscribe((e) => {
      this.data = e.data;
    })

  }

}
