import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-nba-live-and-upcoming-games',
  templateUrl: './nba-live-and-upcoming-games.component.html',
  styleUrls: ['./nba-live-and-upcoming-games.component.scss'],
})
export class NbaLiveAndUpcomingGamesComponent implements OnInit {
  nbaGames: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    //get NBA Games info
    this.getNbaGamesInfo();
  }

  getNbaGamesInfo() {
    this.bettingOdds.getNbaGamesData().subscribe((response) => {
      this.nbaGames = response;
    });
  }

  getOdds(key: any, id: any) {
    this.router.navigate([`/oddsScreen/${key}/${id}`]);
  }

  getPlayerProps(key: any, id: any) {
    this.router.navigate([`/playerPropsPage/${key}/${id}`]);
  }
}
