import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-bot',
  templateUrl: './home-bot.component.html',
  styleUrls: ['./home-bot.component.scss']
})
export class HomeBotComponent implements OnInit {

  @Input() id;

  constructor() { }

  ngOnInit(): void {
  }

}
