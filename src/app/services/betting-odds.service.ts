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

  getEplGamesData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/soccer_epl/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american'
    );
  }

  getLaLigaGamesData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/soccer_spain_la_liga/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american'
    );
  }

  getBundesligaGamesData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/soccer_germany_bundesliga/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american'
    );
  }

  getSerieAGamesData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/soccer_italy_serie_a/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american'
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

  //Historical odds current time
  getHistoricalOddsCurrentTime(key: any, id: any, time: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds One Hour Ago
  getHistoricalOddsOneHourAgo(key: any, id: any, time: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds Two Hour Ago
  getHistoricalOddsTwoHourAgo(key: any, id: any, time: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds Three Hour Ago
  getHistoricalOddsThreeHourAgo(key: any, id: any, time: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds One Hour Ago
  getHistoricalOddsFourHourAgo(key: any, id: any, time: any): Observable<any> {
    // console.log(key)
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }
}
