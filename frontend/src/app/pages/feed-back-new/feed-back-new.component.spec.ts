import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackNewComponent } from './feed-back-new.component';

describe('FeedBackNewComponent', () => {
  let component: FeedBackNewComponent;
  let fixture: ComponentFixture<FeedBackNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
