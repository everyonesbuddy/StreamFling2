import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';
import { MlbPropsAnalysisService } from 'src/app/services/mlb-props-analysis.service';
import { NflPropsAnalysisService } from 'src/app/services/nfl-props-analysis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any = [];
  nbaPlayerPointsProps: any = [];
  mlbPlayerStrikeoutsProps: any = [];
  mlbPlayerWalksProps: any = [];
  mlbPlayerHitsAllowedProps: any = [];
  nflPlayerPassingYardsProps: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService,
    private nbaPropsAnalysis: NbaPropsAnalysisService,
    private mlbPropsAnalysis: MlbPropsAnalysisService,
    private nflPropsAnalysis: NflPropsAnalysisService
  ) {}

  ngOnInit(): void {
    //get sports info
    this.getSportsInfo();
    //get NBA PLayer Points Props
    this.getNbaPlayerPointsProps();
    //get MLB Player Strikeouts Props
    this.getMlbPlayerStrikeoutsProps();
    //get MLB Player Walks Props
    this.getMlbPlayerWalksProps();
    //get MLB Player Hits Allowed Props
    this.getMlbPlayerHitsAllowedProps();
    //get NFL PLayer Passing Yards Props
    this.getNflPlayerPassingYardsProps();
  }

  getSportsInfo() {
    this.bettingOdds.getData().subscribe((response) => {
      console.log('response', response);
      this.data = response;
      console.log('data', this.data);
    });
  }

  getGames(key: any) {
    this.router.navigate(['/compareOdds/' + key]);
    console.log('sport_key', key);
  }

  getNbaPlayerPointsProps() {
    this.nbaPropsAnalysis.getNbaPlayerPointsProps().subscribe((response) => {
      console.log('response', response);
      this.nbaPlayerPointsProps = response;
      console.log('props', this.nbaPlayerPointsProps);
    });
  }

  getNbaPlayerPointPropDetails(player: any) {
    this.router.navigate(['/nbaPointsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  getMlbPlayerStrikeoutsProps() {
    this.mlbPropsAnalysis
      .getMlbPlayerStrikeoutsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.mlbPlayerStrikeoutsProps = response;
        console.log('props', this.mlbPlayerStrikeoutsProps);
      });
  }

  getMlbPlayerStrikeoutPropDetails(player: any) {
    this.router.navigate(['/mlbStrikeoutsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  getMlbPlayerWalksProps() {
    this.mlbPropsAnalysis.getMlbPlayerWalksProps().subscribe((response) => {
      console.log('response', response);
      this.mlbPlayerWalksProps = response;
      console.log('props', this.mlbPlayerWalksProps);
    });
  }

  getMlbPlayerWalksPropDetails(player: any) {
    this.router.navigate(['/mlbWalksPropDetailsPage/' + player]);
    console.log('player', player);
  }

  getMlbPlayerHitsAllowedProps() {
    this.mlbPropsAnalysis
      .getMlbPlayerHitsAllowedProps()
      .subscribe((response) => {
        console.log('response', response);
        this.mlbPlayerHitsAllowedProps = response;
        console.log('props', this.mlbPlayerHitsAllowedProps);
      });
  }

  getMlbPlayerHitsAllowedPropDetails(player: any) {
    this.router.navigate(['/mlbHitsAllowedPropDetailsPage/' + player]);
    console.log('player', player);
  }

  getNflPlayerPassingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerPassingYardsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.nflPlayerPassingYardsProps = response;
        console.log('props', this.nflPlayerPassingYardsProps);
      });
  }

  getNflPlayerPassingYardsPropDetails(player: any) {
    this.router.navigate(['nflPassingYardsPropDetailsPage/' + player]);
    console.log('player', player);
  }
}
