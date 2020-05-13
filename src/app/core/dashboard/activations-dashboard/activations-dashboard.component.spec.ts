import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivationsDashboardComponent} from './activations-dashboard.component';

describe('ActivationsDashboardComponent', () => {
  let component: ActivationsDashboardComponent;
  let fixture: ComponentFixture<ActivationsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivationsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivationsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
