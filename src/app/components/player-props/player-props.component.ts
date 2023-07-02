import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-player-props',
  templateUrl: './player-props.component.html',
  styleUrls: ['./player-props.component.scss'],
})
export class PlayerPropsComponent implements OnInit {
  data: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    //check subscription status
    this.subscriptionService.getSubscriptionStatus();

    //get sports info
    this.getSportsInfo();
  }

  getSportsInfo() {
    this.bettingOdds.getData().subscribe((response) => {
      console.log('response', response);
      this.data = response;
      console.log('data', this.data);
    });
  }

  getGames(key: any) {
    this.router.navigate(['/gamesPlayerPropsOdds/' + key]);
    console.log('sport_key', key);
  }
}
