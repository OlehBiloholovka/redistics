import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPartnerDashboardComponent } from './team-partner-dashboard.component';

describe('TeamPartnerDashboardComponent', () => {
  let component: TeamPartnerDashboardComponent;
  let fixture: ComponentFixture<TeamPartnerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPartnerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPartnerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
