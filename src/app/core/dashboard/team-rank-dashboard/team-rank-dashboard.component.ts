import {Component, Input, OnInit} from '@angular/core';
import {CardData} from '../dashboard-card/card-data.model';
import {TeamRankService} from '../../../share/services/team-rank.service';

@Component({
  selector: 'app-team-rank-dashboard',
  templateUrl: './team-rank-dashboard.component.html',
  styleUrls: ['./team-rank-dashboard.component.css']
})
export class TeamRankDashboardComponent implements OnInit {
  dashboardCardName: string;
  @Input() userCode: number | string;
  cardData: CardData;

  constructor(private tis: TeamRankService) {
    this.dashboardCardName = 'Рейтинг команди';
    this.cardData = this.tis.getTeamData();
  }

  ngOnInit(): void {
  }

}
