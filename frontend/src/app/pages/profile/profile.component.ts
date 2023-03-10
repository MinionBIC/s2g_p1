import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckInService } from 'src/app/services/check-in.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  id;
  username;

  mode = 'display';

  constructor(private Router:Router, private activatedRoute: ActivatedRoute, private CheckInService: CheckInService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((e) => {
      let id = e.get('id');

      this.id = id;
      this.CheckInService.getUsername(this.id).subscribe((e) => {
        this.username = e.username;
      } )
   })
  }

  setModeToDisplay(){
    this.mode = 'display';
  }

  setModeToEdit(){
    this.mode = 'edit';
  }

  backToHome(){
    this.Router.navigate(['/home/' + this.id])
  }


}
