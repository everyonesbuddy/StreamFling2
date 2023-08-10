import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BettingOddsService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/?apiKey=5e7c521ab26381b068424419c586233a&outrights=false'
    );
  }

  getOdds(key: any, id: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american&eventIds=${id}`
    );
  }

  getGames(key: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american`
    );
  }

  getPlayerProps(
    market_key: any,
    eventId: any,
    sportKey: any
  ): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${sportKey}/events/${eventId}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=${market_key}&oddsFormat=american`
    );
  }

  // getHistoricalOddsOneHourAgo(key: any, id: any, time: any): Observable<any> {
  //   // console.log(key)
  //   return this.http.get(
  //     `https://api.the-odds-api.com/v4/sports/${key}/odds-history/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h&date=${time}&eventId=${id}&oddsFormat=american&bookmakers=fanduel`
  //   );
  // }
}
