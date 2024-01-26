import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';

@Component({
  selector: 'app-soccer-player-shots-page',
  templateUrl: './soccer-player-shots-page.component.html',
  styleUrls: ['./soccer-player-shots-page.component.scss'],
})
export class SoccerPlayerShotsPageComponent implements OnInit {
  soccerPlayerShotsProps: any = [];

  constructor(
    private router: Router,
    private soccerPropsAnalysis: SoccerPropsAnalysisService
  ) {}

  ngOnInit(): void {
    // get Soccer Player Shots props
    this.getSoccerPlayerShotsProps();
  }

  //get all players shots data
  getSoccerPlayerShotsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerShotsProps()
      .subscribe((response) => {
        this.soccerPlayerShotsProps = response;
      });
  }

  //get specific player shots details
  getSoccerPlayerShotsPropDetails(player: any) {
    this.router.navigate(['soccerShotsPropDetailsPage/' + player]);
  }
}
