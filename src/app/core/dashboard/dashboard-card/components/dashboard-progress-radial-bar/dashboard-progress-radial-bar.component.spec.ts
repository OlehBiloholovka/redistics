import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardProgressRadialBarComponent} from './dashboard-progress-radial-bar.component';

describe('DashboardProgressRadialBarComponent', () => {
  let component: DashboardProgressRadialBarComponent;
  let fixture: ComponentFixture<DashboardProgressRadialBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressRadialBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressRadialBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
