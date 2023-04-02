import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { FeedBackHubComponent } from './pages/feed-back-hub/feed-back-hub.component';
import { FeedBackNewComponent } from './pages/feed-back-new/feed-back-new.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StartComponent } from './pages/start/start.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { SurveyEditorComponent } from './pages/survey-editor/survey-editor.component';
import { SurveyHubComponent } from './pages/survey-hub/survey-hub.component';
import { SurveyResultComponent } from './pages/survey-result/survey-result.component';
import { SurveyViewComponent } from './pages/survey-view/survey-view.component';

const routes: Routes = [
  { path:'', component:StartComponent},
  { path:'check-in', component:CheckInComponent},
  { path:'home/:id', component:HomeComponent},
  { path:'home/:id/surveyCreate', component:SurveyCreateComponent},
  { path:'profile/:id', component:ProfileComponent},
  { path:'survey-create/', component:SurveyCreateComponent},
  { path:'survey-hub/:id', component:SurveyHubComponent},
  { path:'survey-editor', component:SurveyEditorComponent},
  { path:'survey-view/:id', component:SurveyViewComponent},
  { path:'survey-result/:id', component:SurveyResultComponent},
  { path:'feedback-hub', component:FeedBackHubComponent},
  { path:'feedback-new', component:FeedBackNewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
