import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss'],
})
export class SettingsPageComponent implements OnInit {
  subscriptionData: any;

  constructor(
    private subscriptionService: SubscriptionService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.getSubscriptions();
  }

  //solving this way cause route resolver did not work
  getSubscriptions() {
    this.http
      .get(
        'https://streamfling-be-aut-sub.herokuapp.com/api/subscriptions/?_id=' +
          localStorage.getItem('_id')
      )
      .subscribe((response: any) => {
        const subscriptionData = response.data;
        this.subscriptionData = subscriptionData;
      });
  }

  onManageSub() {
    this.subscriptionService.manageSubscription();
  }
}
