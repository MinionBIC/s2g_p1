import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SurveyModule } from "survey-angular-ui";

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeadComponent } from './components/home-head/home-head.component';
import { HomeFeedComponent } from './components/home-feed/home-feed.component';
import { HomeBotComponent } from './components/home-bot/home-bot.component';
import { HomeFeedItemComponent } from './components/home-feed-item/home-feed-item.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileDisplayComponent } from './components/profile-display/profile-display.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { SurveyHubComponent } from './pages/survey-hub/survey-hub.component';
import { FeedBackHubComponent } from './pages/feed-back-hub/feed-back-hub.component';
import { FeedBackNewComponent } from './pages/feed-back-new/feed-back-new.component';
import { FeedBackItemComponent } from './components/feed-back-item/feed-back-item.component';
import { SurveyEditorComponent } from './pages/survey-editor/survey-editor.component';
import { SurveyViewComponent } from './pages/survey-view/survey-view.component';
import { SurveyResultComponent } from './pages/survey-result/survey-result.component';
import { SurveyCommentComponent } from './pages/survey-comment/survey-comment.component';
import { SurveyViewerComponent } from './components/survey-viewer/survey-viewer.component';
import { SurveyCreatorComponent } from './components/survey-creator/survey-creator.component';
import { TextQuestionComponent } from './components/survey/text-question/text-question.component';
import { DropdownQuestionComponent } from './components/survey/dropdown-question/dropdown-question.component';
import { CheckQuestionComponent } from './components/survey/check-question/check-question.component';
import { RadioQuestionComponent } from './components/survey/radio-question/radio-question.component';
import { DateQuestionComponent } from './components/survey/date-question/date-question.component';
import { NumericQuestionComponent } from './components/survey/numeric-question/numeric-question.component';
import { RankingQuestionComponent } from './components/survey/ranking-question/ranking-question.component';
import { RatingQuestionComponent } from './components/survey/rating-question/rating-question.component';
import { BoolQuestionComponent } from './components/survey/bool-question/bool-question.component';
import { ColorQuestionComponent } from './components/survey/color-question/color-question.component';
import { SurveyOrganizerComponent } from './components/survey-organizer/survey-organizer.component';


const matModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatListModule,
  MatStepperModule,
  MatSelectModule,
  MatCheckboxModule,
  MatDatepickerModule,
  DragDropModule
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    CheckInComponent,
    HomeComponent,
    HomeHeadComponent,
    HomeFeedComponent,
    HomeBotComponent,
    HomeFeedItemComponent,
    SurveyCreateComponent,
    ProfileComponent,
    ProfileDisplayComponent,
    ProfileEditComponent,
    SurveyHubComponent,
    FeedBackHubComponent,
    FeedBackNewComponent,
    FeedBackItemComponent,
    SurveyEditorComponent,
    SurveyViewComponent,
    SurveyResultComponent,
    SurveyCommentComponent,
    SurveyViewerComponent,
    SurveyCreatorComponent,
    TextQuestionComponent,
    DropdownQuestionComponent,
    CheckQuestionComponent,
    RadioQuestionComponent,
    DateQuestionComponent,
    NumericQuestionComponent,
    RankingQuestionComponent,
    RatingQuestionComponent,
    BoolQuestionComponent,
    ColorQuestionComponent,
    SurveyOrganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SurveyModule,
    matModules
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
