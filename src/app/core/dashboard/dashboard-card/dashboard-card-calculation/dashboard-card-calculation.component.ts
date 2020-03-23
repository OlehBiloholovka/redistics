import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RegistrationIndicator} from '../../../../share/models/registration-indicator.model';
import {DashboardCategoryBoard} from '../modules/dashboard-category-board/dashboard-category-board.model';
import {DashboardCategoryBoardCreator} from '../modules/model-creators/dashboard-category-board-creator';

@Component({
  selector: 'app-dashboard-card-calculation',
  templateUrl: './dashboard-card-calculation.component.html',
  styleUrls: ['./dashboard-card-calculation.component.css']
})
export class DashboardCardCalculationComponent implements OnInit, OnChanges {

  @Input() registrationIndicator: RegistrationIndicator;
  @Input() isChecked: boolean;
  checkedACategoryProgressBoard: DashboardCategoryBoard;
  onCheckingACategoryProgressBoard: DashboardCategoryBoard;
  checkedBCategoryProgressBoard: DashboardCategoryBoard;
  onCheckingBCategoryProgressBoard: DashboardCategoryBoard;
  checkedCategoryShareBoard: DashboardCategoryBoard;
  onCheckingCategoryShareBoard: DashboardCategoryBoard;
  aCategoryProgressBoard: DashboardCategoryBoard;
  bCategoryProgressBoard: DashboardCategoryBoard;
  categoryShareBoard: DashboardCategoryBoard;

  constructor() {
  }

  ngOnInit(): void {
    this.checkedACategoryProgressBoard = DashboardCategoryBoardCreator
      .createCheckedDashboardACategoryProgressBoard(this.registrationIndicator);
    this.onCheckingACategoryProgressBoard = DashboardCategoryBoardCreator
      .createOnCheckingDashboardACategoryProgressBoard(this.registrationIndicator);
    this.checkedBCategoryProgressBoard = DashboardCategoryBoardCreator
      .createCheckedDashboardBCategoryProgressBoard(this.registrationIndicator);
    this.onCheckingBCategoryProgressBoard = DashboardCategoryBoardCreator
      .createOnCheckingDashboardBCategoryProgressBoard(this.registrationIndicator);
    this.checkedCategoryShareBoard = DashboardCategoryBoardCreator
      .createCheckedDashboardCategoryShareBoard(this.registrationIndicator);
    this.onCheckingCategoryShareBoard = DashboardCategoryBoardCreator
      .createOnCheckingDashboardCategoryShareBoard(this.registrationIndicator);
    this.setCategoryBoards();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setCategoryBoards();
  }

  private setCategoryBoards() {
    this.aCategoryProgressBoard = this.isChecked ? this.checkedACategoryProgressBoard : this.onCheckingACategoryProgressBoard;
    this.bCategoryProgressBoard = this.isChecked ? this.checkedBCategoryProgressBoard : this.onCheckingBCategoryProgressBoard;
    this.categoryShareBoard = this.isChecked ? this.checkedCategoryShareBoard : this.onCheckingCategoryShareBoard;
  }
}
