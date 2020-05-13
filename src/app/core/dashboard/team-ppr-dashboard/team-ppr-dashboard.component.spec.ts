import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamPprDashboardComponent} from './team-ppr-dashboard.component';

describe('TeamPprDashboardComponent', () => {
  let component: TeamPprDashboardComponent;
  let fixture: ComponentFixture<TeamPprDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPprDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPprDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
