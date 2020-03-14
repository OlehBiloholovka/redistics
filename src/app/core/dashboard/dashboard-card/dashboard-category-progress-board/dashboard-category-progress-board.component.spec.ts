import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryProgressBoardComponent } from './dashboard-category-progress-board.component';

describe('DashboardCategoryProgressBoardComponent', () => {
  let component: DashboardCategoryProgressBoardComponent;
  let fixture: ComponentFixture<DashboardCategoryProgressBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCategoryProgressBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCategoryProgressBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
