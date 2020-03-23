import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryShareBoardComponent } from './dashboard-category-share-board.component';

describe('DasboardCategoryShareBoardComponent', () => {
  let component: DashboardCategoryShareBoardComponent;
  let fixture: ComponentFixture<DashboardCategoryShareBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCategoryShareBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCategoryShareBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
