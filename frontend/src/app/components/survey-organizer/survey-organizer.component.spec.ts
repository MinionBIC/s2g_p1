import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyOrganizerComponent } from './survey-organizer.component';

describe('SurveyOrganizerComponent', () => {
  let component: SurveyOrganizerComponent;
  let fixture: ComponentFixture<SurveyOrganizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyOrganizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyOrganizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
