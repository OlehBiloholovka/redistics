import {RegistrationIndicator} from '../../../../../share/models/registration-indicator.model';
import {DashboardCategoryShareBoard} from '../dashboard-category-board/dashboard-category-share-board/dashboard-category-share-board.model';
import {DashboardCategoryBoard} from '../dashboard-category-board/dashboard-category-board.model';
// tslint:disable-next-line:max-line-length
import {DashboardCategoryProgressBoard} from '../dashboard-category-board/dashboard-category-progress-board/dashboard-category-progress-board.model';
import {DashboardProgressBarCreator} from './dashboard-progress-bar-creator';

export class DashboardCategoryBoardCreator {
  static createCheckedDashboardCategoryShareBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const shareBoard = new DashboardCategoryShareBoard();
    const shareProgressBar = DashboardProgressBarCreator.createCheckedCategoryShareProgressBar(registrationIndicator);
    const shareResultProgressBar = DashboardProgressBarCreator.createCheckedCategoryShareResultProgressBar(registrationIndicator);
    shareBoard.progressBars.push(shareProgressBar, shareResultProgressBar);
    return shareBoard;
  }
  static createOnCheckingDashboardCategoryShareBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const shareBoard = new DashboardCategoryShareBoard();
    const shareProgressBar = DashboardProgressBarCreator.createOnCheckingCategoryShareProgressBar(registrationIndicator);
    const shareResultProgressBar = DashboardProgressBarCreator.createOnCheckingCategoryShareResultProgressBar(registrationIndicator);
    shareBoard.progressBars.push(shareProgressBar, shareResultProgressBar);
    return shareBoard;
  }
  static createCheckedDashboardACategoryProgressBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const progressBoard = new DashboardCategoryProgressBoard();
    progressBoard.prefixBoardLabel = 'A';
    const checkedResultA = registrationIndicator.calculations.checkedResultA();
    progressBoard.suffixBoardLabel = Math.round(checkedResultA * 100) + '%';
    progressBoard.progressBars.push(DashboardProgressBarCreator.createCheckedACategoryProgressBar(registrationIndicator));
    return progressBoard;
  }
  static createCheckedDashboardBCategoryProgressBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const progressBoard = new DashboardCategoryProgressBoard();
    progressBoard.prefixBoardLabel = 'B';
    const checkedResultB = registrationIndicator.calculations.checkedResultB();
    progressBoard.suffixBoardLabel = Math.round(checkedResultB * 100) + '%';
    progressBoard.progressBars.push(DashboardProgressBarCreator.createCheckedBCategoryProgressBar(registrationIndicator));
    return progressBoard;
  }
  static createOnCheckingDashboardACategoryProgressBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const progressBoard = new DashboardCategoryProgressBoard();
    progressBoard.prefixBoardLabel = 'A';
    const onCheckingResultA = registrationIndicator.calculations.onCheckingResultA();
    progressBoard.suffixBoardLabel = Math.round(onCheckingResultA * 100) + '%';
    progressBoard.progressBars.push(DashboardProgressBarCreator.createOnCheckingACategoryProgressBar(registrationIndicator));
    return progressBoard;
  }
  static createOnCheckingDashboardBCategoryProgressBoard(registrationIndicator: RegistrationIndicator): DashboardCategoryBoard {
    const progressBoard = new DashboardCategoryProgressBoard();
    progressBoard.prefixBoardLabel = 'B';
    const onCheckedResultB = registrationIndicator.calculations.onCheckingResultB();
    progressBoard.suffixBoardLabel = Math.round(onCheckedResultB * 100) + '%';
    progressBoard.progressBars.push(DashboardProgressBarCreator.createOnCheckingBCategoryProgressBar(registrationIndicator));
    return progressBoard;
  }
}
