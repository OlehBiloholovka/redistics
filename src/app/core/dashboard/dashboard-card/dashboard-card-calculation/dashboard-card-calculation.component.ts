import {Component, OnInit} from '@angular/core';
import {DashboardProgressBar} from '../dashboard-progress-bar/dashboard-progress-bar.model';

@Component({
  selector: 'app-dashboard-card-calculation',
  templateUrl: './dashboard-card-calculation.component.html',
  styleUrls: ['./dashboard-card-calculation.component.css']
})
export class DashboardCardCalculationComponent implements OnInit {
  dashboardProgressBarA: DashboardProgressBar;
  planResultA: string;
  categoryA: string;
  dashboardProgressBarB: DashboardProgressBar;
  planResultB: string;
  categoryB: string;
  dashboardShareProgressBar: DashboardProgressBar;
  dashboardResultProgressBar: DashboardProgressBar;

  constructor() {
  }

  ngOnInit(): void {
    this.planResultA = '0.65';
    this.planResultB = '0';
    this.categoryA = 'A';
    this.categoryB = 'B';
    this.dashboardProgressBarA = new DashboardProgressBar();
    this.dashboardProgressBarA.firstProgressValue = '10%';
    this.dashboardProgressBarA.suffixValue = '12';
    this.dashboardProgressBarA.firstProgressValueLabel = '2';
    this.dashboardProgressBarA.firstUnderProgressValue = 'fact: 30%';
    this.dashboardProgressBarA.middleUnderProgressValue = '/';
    this.dashboardProgressBarA.lastUnderProgressValue = 'plan: 65%';
    this.dashboardProgressBarA.progressBarFontColor = '#fff';
    this.dashboardProgressBarB = new DashboardProgressBar();
    this.dashboardProgressBarB.firstProgressValue = '10%';
    this.dashboardProgressBarB.suffixValue = '12';
    this.dashboardProgressBarB.firstProgressValueLabel = '2';
    this.dashboardProgressBarB.firstUnderProgressValue = 'fact: 30%';
    this.dashboardProgressBarB.middleUnderProgressValue = '/';
    this.dashboardProgressBarB.lastUnderProgressValue = 'plan: 65%';
    this.dashboardProgressBarB.progressBarFontColor = '#fff';
    this.dashboardShareProgressBar = new DashboardProgressBar();
    this.dashboardShareProgressBar.prefixValue = '104%*';
    this.dashboardShareProgressBar.suffixValue = '*6%';
    this.dashboardShareProgressBar.firstProgressValue = '80%';
    this.dashboardShareProgressBar.firstProgressValueLabel = '80%';
    this.dashboardShareProgressBar.secondProgressValue = '20%';
    this.dashboardShareProgressBar.secondProgressValueLabel = '20%';
    this.dashboardResultProgressBar = new DashboardProgressBar();
    this.dashboardResultProgressBar.firstProgressValue = '94%';
    this.dashboardResultProgressBar.firstProgressValueLabel = '94%';
    this.dashboardResultProgressBar.secondProgressValue = '5%';
    this.dashboardResultProgressBar.secondProgressValueLabel = '5%';
    this.dashboardResultProgressBar.middleUnderProgressValue = '98%';
    this.dashboardResultProgressBar.middleUnderProgressBarFontSize = '1.5';
  }

}
