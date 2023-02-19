import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './pages/start/start.component';
import { HeaderComponent } from './components/header/header.component';
import { CheckInComponent } from './pages/check-in/check-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { HomeHeadComponent } from './components/home-head/home-head.component';
import { HomeFeedComponent } from './components/home-feed/home-feed.component';
import { HomeBotComponent } from './components/home-bot/home-bot.component';
import { HomeFeedItemComponent } from './components/home-feed-item/home-feed-item.component';
import { SurveyCreateComponent } from './pages/survey-create/survey-create.component';


const matModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  FormsModule,
  MatListModule,
  MatStepperModule
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
    SurveyCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    matModules
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
