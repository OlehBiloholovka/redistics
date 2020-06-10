import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamRankDashboardComponent} from './team-rank-dashboard.component';

describe('TeamPprDashboardComponent', () => {
  let component: TeamRankDashboardComponent;
  let fixture: ComponentFixture<TeamRankDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRankDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
