import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';
import { MlbPropsAnalysisService } from 'src/app/services/mlb-props-analysis.service';
import { NflPropsAnalysisService } from 'src/app/services/nfl-props-analysis.service';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  games: any = [];
  playerPropAvailable: boolean = false;
  data: any = [];
  eplGames: any = [];
  nbaGames: any = [];
  laLigaGames: any = [];
  bundesligaGames: any = [];
  serieAGames: any = [];
  nbaPlayerPointsProps: any = [];
  nbaPlayerAssistsProps: any = [];
  nbaPlayerReboundsProps: any = [];
  // mlbPlayerStrikeoutsProps: any = [];
  // mlbPlayerWalksProps: any = [];
  // mlbPlayerHitsAllowedProps: any = [];
  nflPlayerPassingYardsProps: any = [];
  nflPlayerReceivingYardsProps: any = [];
  nflPlayerRushingYardsProps: any = [];
  soccerPlayerGoalsProps: any = [];
  soccerPlayerShotsProps: any = [];
  soccerPlayerAssistsProps: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService,
    private nbaPropsAnalysis: NbaPropsAnalysisService,
    private mlbPropsAnalysis: MlbPropsAnalysisService,
    private nflPropsAnalysis: NflPropsAnalysisService,
    private soccerPropsAnalysis: SoccerPropsAnalysisService
  ) {}

  ngOnInit(): void {
    //get sports info
    this.getSportsInfo();
    //get EPL Games info
    this.getEplGamesInfo();
    //get NBA Games info
    this.getNbaGamesInfo();
    //get La Liga Games info
    this.getLaLigaGamesInfo();
    //get Bundasliga Games info
    this.getBundesligaGamesInfo();
    //get Serie A Games info
    this.getSerieAGamesInfo();
    //get NBA PLayer Points Props
    this.getNbaPlayerPointsProps();
    //get NBA PLayer Assists Props
    this.getNbaPlayerAssistsProps();
    //get NBA PLayer Rebounds Props
    this.getNbaPlayerReboundsProps();
    //get MLB Player Strikeouts Props
    // this.getMlbPlayerStrikeoutsProps();
    //get MLB Player Walks Props
    // this.getMlbPlayerWalksProps();
    //get MLB Player Hits Allowed Props
    // this.getMlbPlayerHitsAllowedProps();
    //get NFL PLayer Passing Yards Props
    this.getNflPlayerPassingYardsProps();
    //get NFL PLayer Receiving Yards Props
    this.getNflPlayerReceivingYardsProps();
    //get NFL PLayer Rushing Yards Props
    this.getNflPlayerRushingYardsProps();
    // get Soccer Player Goals props
    this.getSoccerPlayerGoalsProps();
    // get Soccer Player Shots props
    this.getSoccerPlayerShotsProps();
    // get Soccer Player Assists props
    this.getSoccerPlayerAssistsProps();
  }

  getSportsInfo() {
    this.bettingOdds.getData().subscribe((response) => {
      console.log('response', response);
      this.data = response;
      console.log('data', this.data);
    });
  }

  getEplGamesInfo() {
    this.bettingOdds.getEplGamesData().subscribe((response) => {
      console.log('response', response);
      this.eplGames = response;
      console.log('eplGames', this.eplGames);
    });
  }

  getNbaGamesInfo() {
    this.bettingOdds.getNbaGamesData().subscribe((response) => {
      console.log('response', response);
      this.nbaGames = response;
      console.log('nbaGames', this.nbaGames);
    });
  }

  getLaLigaGamesInfo() {
    this.bettingOdds.getLaLigaGamesData().subscribe((response) => {
      console.log('response', response);
      this.laLigaGames = response;
      console.log('laLigaGames', this.laLigaGames);
    });
  }

  getBundesligaGamesInfo() {
    this.bettingOdds.getBundesligaGamesData().subscribe((response) => {
      console.log('response', response);
      this.bundesligaGames = response;
      console.log('bundesligaGames', this.bundesligaGames);
    });
  }

  getSerieAGamesInfo() {
    this.bettingOdds.getSerieAGamesData().subscribe((response) => {
      console.log('response', response);
      this.serieAGames = response;
      console.log('serieAGames', this.serieAGames);
    });
  }

  getOdds(key: any, id: any) {
    this.router.navigate([`/oddsScreen/${key}/${id}`]);
    console.log('sport_key', key);
  }

  getPlayerProps(key: any, id: any) {
    this.router.navigate([`/playerPropsPage/${key}/${id}`]);
    console.log('sport_key', key);
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

  getNbaPlayerAssistsProps() {
    this.nbaPropsAnalysis.getNbaPlayerAssistsProps().subscribe((response) => {
      console.log('response', response);
      this.nbaPlayerAssistsProps = response;
      console.log('props', this.nbaPlayerAssistsProps);
    });
  }

  getNbaPlayerAssistPropDetails(player: any) {
    this.router.navigate(['/nbaAssistsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  getNbaPlayerReboundsProps() {
    this.nbaPropsAnalysis.getNbaPlayerReboundsProps().subscribe((response) => {
      console.log('response', response);
      this.nbaPlayerReboundsProps = response;
      console.log('props', this.nbaPlayerReboundsProps);
    });
  }

  getNbaPlayerReboundPropDetails(player: any) {
    this.router.navigate(['/nbaReboundsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players Strikeouts data
  // getMlbPlayerStrikeoutsProps() {
  //   this.mlbPropsAnalysis
  //     .getMlbPlayerStrikeoutsProps()
  //     .subscribe((response) => {
  //       console.log('response', response);
  //       this.mlbPlayerStrikeoutsProps = response;
  //       console.log('props', this.mlbPlayerStrikeoutsProps);
  //     });
  // }

  //get specific player Strikeouts details
  // getMlbPlayerStrikeoutPropDetails(player: any) {
  //   this.router.navigate(['/mlbStrikeoutsPropDetailsPage/' + player]);
  //   console.log('player', player);
  // }

  //get all players Walks data
  // getMlbPlayerWalksProps() {
  //   this.mlbPropsAnalysis.getMlbPlayerWalksProps().subscribe((response) => {
  //     console.log('response', response);
  //     this.mlbPlayerWalksProps = response;
  //     console.log('props', this.mlbPlayerWalksProps);
  //   });
  // }

  //get specific player walks details
  // getMlbPlayerWalksPropDetails(player: any) {
  //   this.router.navigate(['/mlbWalksPropDetailsPage/' + player]);
  //   console.log('player', player);
  // }

  //get all players Hits Allowed data
  // getMlbPlayerHitsAllowedProps() {
  //   this.mlbPropsAnalysis
  //     .getMlbPlayerHitsAllowedProps()
  //     .subscribe((response) => {
  //       console.log('response', response);
  //       this.mlbPlayerHitsAllowedProps = response;
  //       console.log('props', this.mlbPlayerHitsAllowedProps);
  //     });
  // }

  //get specific player Hits Allowed details
  // getMlbPlayerHitsAllowedPropDetails(player: any) {
  //   this.router.navigate(['/mlbHitsAllowedPropDetailsPage/' + player]);
  //   console.log('player', player);
  // }

  //get all players passing yards data
  getNflPlayerPassingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerPassingYardsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.nflPlayerPassingYardsProps = response;
        console.log('props', this.nflPlayerPassingYardsProps);
      });
  }

  // get specific player passing yard details
  getNflPlayerPassingYardsPropDetails(player: any) {
    this.router.navigate(['nflPassingYardsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players receiving yards data
  getNflPlayerReceivingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerReceivingYardsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.nflPlayerReceivingYardsProps = response;
        console.log('props', this.nflPlayerReceivingYardsProps);
      });
  }

  //get specific players receiving yards data
  getNflPlayerReceivingYardsPropDetails(player: any) {
    this.router.navigate(['nflReceivingYardsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players rushing yards data
  getNflPlayerRushingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerRushingYardsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.nflPlayerRushingYardsProps = response;
        console.log('props', this.nflPlayerRushingYardsProps);
      });
  }

  //get specific players rushing yards details
  getNflPlayerRushingYardsPropDetails(player: any) {
    this.router.navigate(['nflRushingYardsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players goals data
  getSoccerPlayerGoalsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerGoalsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.soccerPlayerGoalsProps = response;
        console.log('props', this.soccerPlayerGoalsProps);
      });
  }

  //get specific player goals details
  getSoccerPlayerGoalsPropDetails(player: any) {
    this.router.navigate(['soccerGoalsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players shots data
  getSoccerPlayerShotsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerShotsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.soccerPlayerShotsProps = response;
        console.log('props', this.soccerPlayerShotsProps);
      });
  }

  //get specific player shots details
  getSoccerPlayerShotsPropDetails(player: any) {
    this.router.navigate(['soccerShotsPropDetailsPage/' + player]);
    console.log('player', player);
  }

  //get all players assists data
  getSoccerPlayerAssistsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerAssistsProps()
      .subscribe((response) => {
        console.log('response', response);
        this.soccerPlayerAssistsProps = response;
        console.log('props', this.soccerPlayerAssistsProps);
      });
  }

  //get specific player assists details
  getSoccerPlayerAssistsPropDetails(player: any) {
    this.router.navigate(['soccerAssistsPropDetailsPage/' + player]);
    console.log('player', player);
  }
}
