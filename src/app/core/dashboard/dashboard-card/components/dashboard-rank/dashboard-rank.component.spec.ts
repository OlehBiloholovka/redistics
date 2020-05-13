import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardRankComponent} from './dashboard-rank.component';
import {MatTableModule} from '@angular/material/table';

describe('DashboardRankComponent', () => {
  let component: DashboardRankComponent;
  let fixture: ComponentFixture<DashboardRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRankComponent ],
      imports: [ MatTableModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
