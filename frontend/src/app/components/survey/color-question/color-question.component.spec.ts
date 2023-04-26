import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorQuestionComponent } from './color-question.component';

describe('ColorQuestionComponent', () => {
  let component: ColorQuestionComponent;
  let fixture: ComponentFixture<ColorQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
