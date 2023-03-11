import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedBackHubComponent } from './feed-back-hub.component';

describe('FeedBackHubComponent', () => {
  let component: FeedBackHubComponent;
  let fixture: ComponentFixture<FeedBackHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedBackHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedBackHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
