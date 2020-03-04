import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PprDashboardComponent } from './ppr-dashboard.component';

describe('PprDashboardComponent', () => {
  let component: PprDashboardComponent;
  let fixture: ComponentFixture<PprDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PprDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PprDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
