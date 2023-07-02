import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SubsData } from '../models/sub-data-model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  constructor(private http: HttpClient, private router: Router) {}
  handleSubscription(id: any) {
    const subsData: SubsData = {
      id: id,
      auth: { _id: localStorage.getItem('_id') },
    };
    let header = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
    this.http
      .post(
        'https://streamfling-be-aut-sub.herokuapp.com/api/create-subscription',
        subsData,
        {
          headers: header,
        }
      )
      .subscribe((response: any) => {
        return window.open(response, '_self');
      });
  }

  // handleDonations(id: any) {
  //   const subsData: SubsData = {
  //     id: id,
  //     auth: { _id: localStorage.getItem('_id') },
  //   };
  //   let header = new HttpHeaders().set(
  //     'Authorization',
  //     'Bearer ' + localStorage.getItem('token')
  //   );
  //   this.http
  //     .post('https://streamfling-be-aut-sub.herokuapp.com/api/create-payment', subsData, {
  //       headers: header,
  //     })
  //     .subscribe((response: any) => {
  //       return window.open(response, '_blank');
  //     });
  // }

  // getPaymentStatus() {
  //   this.http
  //     .get(
  //       'https://streamfling-be-aut-sub.herokuapp.com/api/payment-status/?_id=' +
  //         localStorage.getItem('_id')
  //     )
  //     .subscribe((response: any) => {
  //       if (response.subscriptions.length === 0) {
  //         this.router.navigate(['']);
  //       } else {
  //         this.router.navigate(['/dashboard']);
  //       }
  //     });
  // }

  getSubscriptionStatus() {
    let accessGranted = false;
    this.http
      .get(
        'https://streamfling-be-aut-sub.herokuapp.com/api/subscription-status/?_id=' +
          localStorage.getItem('_id')
      )
      .subscribe((response: any) => {
        for (let i = 0; i < response.subscriptions.length; i++) {
          if (
            (response.subscriptions.length > 0 &&
              response.subscriptions[i].status === 'active') ||
            'trialing'
          ) {
            accessGranted = true;
            break;
          }
        }
        if (accessGranted) {
          // Grant access
          console.log('Access granted');
          this.router.navigate(['/playerProps']);
        } else {
          // Deny access
          console.log('Access denied');
          this.router.navigate(['/subscriptions']);
        }
        // if (response.subscriptions.length === 0) {
        //   this.router.navigate(['/subscriptions']);
        // } else {
        //   this.router.navigate(['/dashboard']);
        // }
      });
  }

  checkPayment() {
    return this.http.get(
      'https://streamfling-be-aut-sub.herokuapp.com/api/payment-status/?_id=' +
        localStorage.getItem('_id')
    );
  }

  manageSubscription() {
    this.http
      .get(
        'https://streamfling-be-aut-sub.herokuapp.com/api/customer-portal/?_id=' +
          localStorage.getItem('_id')
      )
      .subscribe((response: any) => {
        return window.open(response, '_self');
      });
  }
}
