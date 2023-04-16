import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-player-props-screen',
  templateUrl: './player-props-screen.component.html',
  styleUrls: ['./player-props-screen.component.scss'],
})
export class PlayerPropsScreenComponent implements OnInit {
  props: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let market_key = params['market_key'];
      console.log('market_key', market_key);
      let eventId = params['eventId'];
      console.log('eventId', eventId);
      let sportKey = params['sportKey'];
      console.log('sportKey', sportKey);

      this.bettingOdds
        .getPlayerProps(market_key, eventId, sportKey)
        .subscribe((res) => {
          this.props = [res];
          console.log('res', res);
          console.log('props', this.props);
        });
    });
  }
}
