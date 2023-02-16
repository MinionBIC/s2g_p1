import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { HomeComponent } from './pages/home/home.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  { path:'', component:StartComponent},
  { path:'check-in', component:CheckInComponent},
  { path:'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
