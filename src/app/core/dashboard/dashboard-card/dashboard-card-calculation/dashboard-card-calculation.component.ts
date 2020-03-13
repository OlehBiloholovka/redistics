import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-card-calculation',
  templateUrl: './dashboard-card-calculation.component.html',
  styleUrls: ['./dashboard-card-calculation.component.css']
})
export class DashboardCardCalculationComponent implements OnInit {

  @Input() test: string;

  constructor() { }

  ngOnInit(): void {
  }

}
