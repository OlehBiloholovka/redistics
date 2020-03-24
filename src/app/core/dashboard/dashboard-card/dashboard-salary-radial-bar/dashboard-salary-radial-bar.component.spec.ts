import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSalaryRadialBarComponent } from './dashboard-salary-radial-bar.component';

describe('DashboardSalaryRadialBarComponent', () => {
  let component: DashboardSalaryRadialBarComponent;
  let fixture: ComponentFixture<DashboardSalaryRadialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSalaryRadialBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSalaryRadialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
