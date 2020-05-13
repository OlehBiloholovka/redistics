import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardProgressCircleBarComponent} from './dashboard-progress-circle-bar.component';

describe('DashboardSalaryRadialBarComponent', () => {
  let component: DashboardProgressCircleBarComponent;
  let fixture: ComponentFixture<DashboardProgressCircleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressCircleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressCircleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
