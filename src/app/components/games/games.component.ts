import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: any = [];

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
        console.log('res', res);
      });
    });
  }

  getOdds(key: any, id: any) {
    this.router.navigate([`/oddsScreen/${key}/${id}`]);
    console.log('sport_key', key);
  }

  getPlayerPros(key: any, id: any) {
    this.router.navigate([`/playerPropsPage/${key}/${id}`]);
    console.log('sport_key', key);
  }
}
