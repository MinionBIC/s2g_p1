import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBotComponent } from './home-bot.component';

describe('HomeBotComponent', () => {
  let component: HomeBotComponent;
  let fixture: ComponentFixture<HomeBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeBotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
