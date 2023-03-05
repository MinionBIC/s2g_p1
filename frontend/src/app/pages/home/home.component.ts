import { Component, OnInit } from '@angular/core';

import { ActivatedRoute} from '@angular/router'
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  id;

  constructor(private checkInService: CheckInService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
     this.activatedRoute.paramMap.subscribe((e) => {
        let id = e.get('id');

        this.id = id;
     })
  }

}
