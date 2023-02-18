import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedItemComponent } from './home-feed-item.component';

describe('HomeFeedItemComponent', () => {
  let component: HomeFeedItemComponent;
  let fixture: ComponentFixture<HomeFeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
