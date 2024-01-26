import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';

@Component({
  selector: 'app-nba-player-assists-page',
  templateUrl: './nba-player-assists-page.component.html',
  styleUrls: ['./nba-player-assists-page.component.scss'],
})
export class NbaPlayerAssistsPageComponent implements OnInit {
  nbaPlayerAssistsProps: any = [];

  constructor(
    private nbaPropsAnalysis: NbaPropsAnalysisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    //get NBA PLayer Assists Props
    this.getNbaPlayerAssistsProps();
  }

  getNbaPlayerAssistsProps() {
    this.nbaPropsAnalysis
      .getNbaPlayerAssistsProps()
      .subscribe((response: any) => {
        this.nbaPlayerAssistsProps = response;
      });
  }

  getNbaPlayerAssistPropDetails(player: any) {
    this.router.navigate(['/nbaAssistsPropDetailsPage/' + player]);
  }
}
