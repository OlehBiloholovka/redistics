import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardProgressChartComponent} from './dashboard-progress-chart.component';

describe('DashboardProgressChartComponent', () => {
  let component: DashboardProgressChartComponent;
  let fixture: ComponentFixture<DashboardProgressChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
