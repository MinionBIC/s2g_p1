import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyCommentComponent } from './survey-comment.component';

describe('SurveyCommentComponent', () => {
  let component: SurveyCommentComponent;
  let fixture: ComponentFixture<SurveyCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
