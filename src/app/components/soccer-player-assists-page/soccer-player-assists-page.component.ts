import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';

@Component({
  selector: 'app-soccer-player-assists-page',
  templateUrl: './soccer-player-assists-page.component.html',
  styleUrls: ['./soccer-player-assists-page.component.scss'],
})
export class SoccerPlayerAssistsPageComponent implements OnInit {
  soccerPlayerAssistsProps: any = [];

  constructor(
    private router: Router,
    private soccerPropsAnalysis: SoccerPropsAnalysisService
  ) {}

  ngOnInit(): void {
    // get Soccer Player Assists props
    this.getSoccerPlayerAssistsProps();
  }

  //get all players assists data
  getSoccerPlayerAssistsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerAssistsProps()
      .subscribe((response) => {
        this.soccerPlayerAssistsProps = response;
      });
  }

  //get specific player assists details
  getSoccerPlayerAssistsPropDetails(player: any) {
    this.router.navigate(['soccerAssistsPropDetailsPage/' + player]);
  }
}
