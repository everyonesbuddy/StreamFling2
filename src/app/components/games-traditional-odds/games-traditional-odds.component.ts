import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-games-traditional-odds',
  templateUrl: './games-traditional-odds.component.html',
  styleUrls: ['./games-traditional-odds.component.scss'],
})
export class GamesTraditionalOddsComponent implements OnInit {
  games: any = [];
  playerPropAvailable: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let key = params['key'];
      this.bettingOdds.getGames(key).subscribe((res) => {
        this.games = res;
        if (
          key === 'baseball_mlb' ||
          key === 'basketball_nba' ||
          key === 'icehockey_nhl' ||
          key === 'aussierules_afl' ||
          key === 'americanfootball_nfl' ||
          key === 'basketball_wnba'
        ) {
          this.playerPropAvailable = true;
        }
        console.log('res', res);
      });
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
}
