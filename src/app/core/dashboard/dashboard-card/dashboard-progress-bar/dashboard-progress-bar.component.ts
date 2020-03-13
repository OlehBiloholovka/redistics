import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-progress-bar',
  templateUrl: './dashboard-progress-bar.component.html',
  styleUrls: ['./dashboard-progress-bar.component.css']
})
export class DashboardProgressBarComponent implements OnInit {

  @Input() prefixValue: string;
  @Input() suffixValue: string;
  @Input() firstProgressValue: string;
  @Input() secondProgressValue: string;
  @Input() progressValue: number;
  @Input() progressWidth: number;
  @Input() firstUnderProgressValue: string;
  @Input() middleUnderProgressValue: string;
  @Input() lastUnderProgressValue: string;
  @Input() progressBarHeight: number;
  @Input() progressBarFontSize: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
