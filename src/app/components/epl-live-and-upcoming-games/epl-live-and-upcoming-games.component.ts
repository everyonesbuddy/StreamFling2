import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-epl-live-and-upcoming-games',
  templateUrl: './epl-live-and-upcoming-games.component.html',
  styleUrls: ['./epl-live-and-upcoming-games.component.scss'],
})
export class EplLiveAndUpcomingGamesComponent implements OnInit {
  eplGames: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    //get EPL Games info
    this.getEplGamesInfo();
  }

  getEplGamesInfo() {
    this.bettingOdds.getEplGamesData().subscribe((response) => {
      this.eplGames = response;
    });
  }

  getOdds(key: any, id: any) {
    this.router.navigate([`/oddsScreen/${key}/${id}`]);
  }
}
