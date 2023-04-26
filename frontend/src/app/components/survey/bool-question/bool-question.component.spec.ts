import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolQuestionComponent } from './bool-question.component';

describe('BoolQuestionComponent', () => {
  let component: BoolQuestionComponent;
  let fixture: ComponentFixture<BoolQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
