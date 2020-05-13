import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardCardCalculationComponent} from './dashboard-card-calculation.component';

describe('DashboardCardCalculationComponent', () => {
  let component: DashboardCardCalculationComponent;
  let fixture: ComponentFixture<DashboardCardCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCardCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCardCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
