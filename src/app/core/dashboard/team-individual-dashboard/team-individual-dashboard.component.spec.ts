import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamIndividualDashboardComponent} from './team-individual-dashboard.component';

describe('TeamIndividualDashboardComponent', () => {
  let component: TeamIndividualDashboardComponent;
  let fixture: ComponentFixture<TeamIndividualDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamIndividualDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIndividualDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
