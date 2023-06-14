import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-subscription-card',
  templateUrl: './subscription-card.component.html',
  styleUrls: ['./subscription-card.component.scss'],
})
export class SubscriptionCardComponent implements OnInit {
  prices: any;
  constructor(
    private subscriptionService: SubscriptionService,
    private http: HttpClient,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getSubscriptionInfo();
  }

  //solving this way cause route resolver did not work
  getSubscriptionInfo() {
    this.http
      .get('https://streamfling-be-aut-sub.herokuapp.com/api/prices')
      .subscribe((response) => {
        this.prices = response;
        return this.prices;
      });
  }

  onSubscribe(id: any) {
    this.subscriptionService.handleSubscription(id);
  }
}
