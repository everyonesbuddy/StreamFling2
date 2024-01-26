import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';

@Component({
  selector: 'app-nba-player-points-page',
  templateUrl: './nba-player-points-page.component.html',
  styleUrls: ['./nba-player-points-page.component.scss'],
})
export class NbaPlayerPointsPageComponent implements OnInit {
  nbaPlayerPointsProps: any = [];

  constructor(
    private router: Router,
    private nbaPropsAnalysis: NbaPropsAnalysisService
  ) {}

  ngOnInit(): void {
    //get NBA PLayer Points Props
    this.getNbaPlayerPointsProps();
  }

  getNbaPlayerPointsProps() {
    this.nbaPropsAnalysis.getNbaPlayerPointsProps().subscribe((response) => {
      this.nbaPlayerPointsProps = response;
    });
  }

  getNbaPlayerPointPropDetails(player: any) {
    this.router.navigate(['/nbaPointsPropDetailsPage/' + player]);
  }
}
