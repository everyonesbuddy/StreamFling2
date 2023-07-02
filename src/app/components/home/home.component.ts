import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
    this.router.navigate(['/gamesTraditionalOdds/' + key]);
    console.log('sport_key', key);
  }
}
