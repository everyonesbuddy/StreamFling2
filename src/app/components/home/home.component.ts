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
      this.data = response;
    });
  }

  getEplGamesInfo() {
    this.bettingOdds.getEplGamesData().subscribe((response) => {
      this.eplGames = response;
    });
  }

  getNbaGamesInfo() {
    this.bettingOdds.getNbaGamesData().subscribe((response) => {
      this.nbaGames = response;
    });
  }

  getLaLigaGamesInfo() {
    this.bettingOdds.getLaLigaGamesData().subscribe((response) => {
      this.laLigaGames = response;
    });
  }

  getBundesligaGamesInfo() {
    this.bettingOdds.getBundesligaGamesData().subscribe((response) => {
      this.bundesligaGames = response;
    });
  }

  getSerieAGamesInfo() {
    this.bettingOdds.getSerieAGamesData().subscribe((response) => {
      this.serieAGames = response;
    });
  }

  getOdds(key: any, id: any) {
    this.router.navigate([`/oddsScreen/${key}/${id}`]);
  }

  getPlayerProps(key: any, id: any) {
    this.router.navigate([`/playerPropsPage/${key}/${id}`]);
  }

  getGames(key: any) {
    this.router.navigate(['/compareOdds/' + key]);
  }

  getNbaPlayerPointsProps() {
    this.nbaPropsAnalysis.getNbaPlayerPointsProps().subscribe((response) => {
      this.nbaPlayerPointsProps = response;
    });
  }

  getNbaPlayerPointPropDetails(player: any) {
    this.router.navigate(['/nbaPointsPropDetailsPage/' + player]);
  }

  getNbaPlayerAssistsProps() {
    this.nbaPropsAnalysis.getNbaPlayerAssistsProps().subscribe((response) => {
      this.nbaPlayerAssistsProps = response;
    });
  }

  getNbaPlayerAssistPropDetails(player: any) {
    this.router.navigate(['/nbaAssistsPropDetailsPage/' + player]);
  }

  getNbaPlayerReboundsProps() {
    this.nbaPropsAnalysis.getNbaPlayerReboundsProps().subscribe((response) => {
      this.nbaPlayerReboundsProps = response;
    });
  }

  getNbaPlayerReboundPropDetails(player: any) {
    this.router.navigate(['/nbaReboundsPropDetailsPage/' + player]);
  }

  //get all players Strikeouts data
  // getMlbPlayerStrikeoutsProps() {
  //   this.mlbPropsAnalysis
  //     .getMlbPlayerStrikeoutsProps()
  //     .subscribe((response) => {
  //       ('response', response);
  //       this.mlbPlayerStrikeoutsProps = response;
  //       ('props', this.mlbPlayerStrikeoutsProps);
  //     });
  // }

  //get specific player Strikeouts details
  // getMlbPlayerStrikeoutPropDetails(player: any) {
  //   this.router.navigate(['/mlbStrikeoutsPropDetailsPage/' + player]);
  //   ('player', player);
  // }

  //get all players Walks data
  // getMlbPlayerWalksProps() {
  //   this.mlbPropsAnalysis.getMlbPlayerWalksProps().subscribe((response) => {
  //     ('response', response);
  //     this.mlbPlayerWalksProps = response;
  //     ('props', this.mlbPlayerWalksProps);
  //   });
  // }

  //get specific player walks details
  // getMlbPlayerWalksPropDetails(player: any) {
  //   this.router.navigate(['/mlbWalksPropDetailsPage/' + player]);
  //   ('player', player);
  // }

  //get all players Hits Allowed data
  // getMlbPlayerHitsAllowedProps() {
  //   this.mlbPropsAnalysis
  //     .getMlbPlayerHitsAllowedProps()
  //     .subscribe((response) => {
  //       ('response', response);
  //       this.mlbPlayerHitsAllowedProps = response;
  //       ('props', this.mlbPlayerHitsAllowedProps);
  //     });
  // }

  //get specific player Hits Allowed details
  // getMlbPlayerHitsAllowedPropDetails(player: any) {
  //   this.router.navigate(['/mlbHitsAllowedPropDetailsPage/' + player]);
  //   ('player', player);
  // }

  //get all players passing yards data
  getNflPlayerPassingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerPassingYardsProps()
      .subscribe((response) => {
        this.nflPlayerPassingYardsProps = response;
      });
  }

  // get specific player passing yard details
  getNflPlayerPassingYardsPropDetails(player: any) {
    this.router.navigate(['nflPassingYardsPropDetailsPage/' + player]);
  }

  //get all players receiving yards data
  getNflPlayerReceivingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerReceivingYardsProps()
      .subscribe((response) => {
        this.nflPlayerReceivingYardsProps = response;
      });
  }

  //get specific players receiving yards data
  getNflPlayerReceivingYardsPropDetails(player: any) {
    this.router.navigate(['nflReceivingYardsPropDetailsPage/' + player]);
  }

  //get all players rushing yards data
  getNflPlayerRushingYardsProps() {
    this.nflPropsAnalysis
      .getNflPlayerRushingYardsProps()
      .subscribe((response) => {
        this.nflPlayerRushingYardsProps = response;
      });
  }

  //get specific players rushing yards details
  getNflPlayerRushingYardsPropDetails(player: any) {
    this.router.navigate(['nflRushingYardsPropDetailsPage/' + player]);
  }

  //get all players goals data
  getSoccerPlayerGoalsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerGoalsProps()
      .subscribe((response) => {
        this.soccerPlayerGoalsProps = response;
      });
  }

  //get specific player goals details
  getSoccerPlayerGoalsPropDetails(player: any) {
    this.router.navigate(['soccerGoalsPropDetailsPage/' + player]);
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
