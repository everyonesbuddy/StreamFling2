import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-player-props-page',
  templateUrl: './player-props-page.component.html',
  styleUrls: ['./player-props-page.component.scss'],
})
export class PlayerPropsPageComponent implements OnInit {
  propsToDisplay: any;
  propsAvailable: boolean = false;
  eventId: any;
  sportKey: any;
  game: any = [];

  nbaAndNcaabAndWnbaProps: any = [
    { name: 'Points', market_key: 'player_points' },
    { name: 'Rebounds', market_key: 'player_rebounds' },
    { name: 'Assists', market_key: 'player_assists' },
    { name: 'Threes', market_key: 'player_threes' },
    { name: 'Steals', market_key: 'player_steals' },
    { name: 'Double Double', market_key: 'player_double_double' },
    { name: 'Blocks', market_key: 'player_blocks' },
    { name: 'Turnovers', market_key: 'player_turnovers' },
    {
      name: 'Points + Rebounds + Assists',
      market_key: 'player_points_rebounds_assists',
    },
    { name: 'Points + Rebounds', market_key: 'player_points_rebounds' },
    { name: 'Points + Assists', market_key: 'player_points_assists' },
    { name: 'Rebounds + Assists', market_key: 'player_rebounds_assists' },
  ];

  nflProps: any = [
    { name: 'Pass Touchdowns', market_key: 'player_pass_tds' },
    { name: 'Pass Yards', market_key: 'player_pass_yds' },
    { name: 'Pass Completions', market_key: 'player_pass_completions' },
    { name: 'Pass Attempts', market_key: 'player_pass_attempts' },
    { name: 'Pass Intercepts', market_key: 'player_pass_interceptions' },
    {
      name: 'Pass Longest Completion',
      market_key: 'player_pass_longest_completion',
    },
    { name: 'Rush Yards', market_key: 'player_rush_yds' },
    { name: 'Rush Attempts', market_key: 'player_rush_attempts' },
    {
      name: 'Longest Rush',
      market_key: 'player_rush_longest',
    },
    { name: 'Receptions', market_key: 'player_receptions' },
    { name: 'Reception Yards', market_key: 'player_reception_yds' },
    { name: 'Longest Reception', market_key: 'player_reception_longest' },
  ];

  mlbProps: any = [
    { name: 'Batter home runs', market_key: 'batter_home_runs' },
    { name: 'Batter hits', market_key: 'batter_hits' },
    { name: 'Batter total bases', market_key: 'batter_total_bases' },
    { name: 'Batter RBIs', market_key: 'batter_rbis' },
    { name: 'Batter runs scored', market_key: 'batter_runs_scored' },
    { name: 'Batter hits + runs + RBIs', market_key: 'batter_hits_runs_rbis' },
    { name: 'Batter singles', market_key: 'batter_singles' },
    { name: 'Batter doubles', market_key: 'batter_doubles' },
    {
      name: 'Batter triples',
      market_key: 'batter_triples',
    },
    { name: 'Batter walks', market_key: 'batter_walks' },
    { name: 'Batter strikeouts', market_key: 'batter_strikeouts' },
    { name: 'Batter stolen bases', market_key: 'batter_stolen_bases' },
    { name: 'Pitcher strikeouts', market_key: 'pitcher_strikeouts' },
    { name: 'Pitcher to record a win', market_key: 'pitcher_record_a_win' },
    { name: 'Pitcher hits allowed', market_key: 'pitcher_hits_allowed' },
    { name: 'Pitcher walks', market_key: 'pitcher_walks' },
    { name: 'Pitcher earned runs', market_key: 'pitcher_earned_runs' },
    { name: 'Pitcher outs', market_key: 'pitcher_outs' },
  ];

  nhlProps: any = [
    { name: 'Points', market_key: 'player_points' },
    { name: 'Power play points', market_key: 'player_power_play_points' },
    { name: 'Assists', market_key: 'player_assists' },
    { name: 'Blocked shots', market_key: 'player_blocked_shots' },
    { name: 'Shots on goal', market_key: 'player_shots_on_goal' },
  ];

  aflProps: any = [
    { name: 'Disposals', market_key: 'player_disposals' },
    { name: 'First Goal Scorer', market_key: 'player_goal_scorer_first' },
    { name: 'Last Goal Scorer', market_key: 'player_goal_scorer_last' },
    { name: 'Anytime Goal Scorer', market_key: 'player_goal_scorer_anytime' },
    { name: 'Goals scored', market_key: 'player_goals_scored_over' },
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let key = params['key'];
      console.log('key', key);
      let id = params['id'];
      this.eventId = id;
      this.sportKey = key;
      console.log('id', id);
      if (key === 'basketball_nba') {
        this.propsAvailable = true;
        this.propsToDisplay = this.nbaAndNcaabAndWnbaProps;
      } else if (key === 'basketball_wnba') {
        this.propsAvailable = true;
        this.propsToDisplay = this.nbaAndNcaabAndWnbaProps;
      } else if (key === 'americanfootball_nfl') {
        this.propsAvailable = true;
        this.propsToDisplay = this.nflProps;
      } else if (key === 'baseball_mlb') {
        this.propsAvailable = true;
        this.propsToDisplay = this.mlbProps;
      } else if (key === 'icehockey_nhl') {
        this.propsAvailable = true;
        this.propsToDisplay = this.nhlProps;
      } else if (key === 'aussierules_afl') {
        this.propsAvailable = true;
        this.propsToDisplay = this.aflProps;
      } else {
        this.propsAvailable = false;
        this.propsToDisplay = [];
      }
      console.log('propstodisplay', this.propsToDisplay);
      this.bettingOdds.getOdds(key, id).subscribe((res) => {
        this.game = res;
        console.log('res', res);
      });
    });
  }

  getPlayerProps(market_key: any, eventId: any, sportKey: any) {
    console.log(
      'market_key',
      market_key,
      'eventId',
      eventId,
      'sportKey',
      sportKey
    );
    this.router.navigate([
      `/playerPropsScreen/${sportKey}/${market_key}/${eventId}`,
    ]);
  }
}
