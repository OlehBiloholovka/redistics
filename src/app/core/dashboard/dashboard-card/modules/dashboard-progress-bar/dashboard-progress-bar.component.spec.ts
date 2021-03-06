import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardProgressBarComponent} from './dashboard-progress-bar.component';

describe('DashboardProgressBarComponent', () => {
  let component: DashboardProgressBarComponent;
  let fixture: ComponentFixture<DashboardProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
