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

  getNbaGamesData(): Observable<any> {
    return this.http.get(
      'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american'
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
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american&eventIds=${id}`
    );
  }

  getGames(key: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${key}/odds/?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=h2h,spreads,totals&oddsFormat=american`
    );
  }

  //get player props for a specific event(this api is being used with line comparison tool)
  getPlayerProps(
    market_key: any,
    eventId: any,
    sportKey: any
  ): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/${sportKey}/events/${eventId}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=${market_key}&oddsFormat=american`
    );
  }

  //get fanduel Nba player props assist odds for a specific event(this api is being used with prop research tool )
  getFanduelNbaPlayerPropsAssistsOdds(eventId: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/basketball_nba/events/${eventId}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=player_assists&oddsFormat=american&bookmakers=fanduel`
    );
  }

  //get fanduel Nba player props Points odds for a specific event(this api is being used with prop research tool )
  getFanduelNbaPlayerPropsPointsOdds(eventId: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/basketball_nba/events/${eventId}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=player_points&oddsFormat=american&bookmakers=fanduel`
    );
  }

  //get fanduel Nba player props Rebounds odds for a specific event(this api is being used with prop research tool )
  getFanduelNbaPlayerPropsReboundsOdds(eventId: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/sports/basketball_nba/events/${eventId}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&markets=player_rebounds&oddsFormat=american&bookmakers=fanduel`
    );
  }

  //Historical odds current time
  getHistoricalOddsCurrentTime(key: any, id: any, time: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds One Hour Ago
  getHistoricalOddsOneHourAgo(key: any, id: any, time: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds Two Hour Ago
  getHistoricalOddsTwoHourAgo(key: any, id: any, time: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds Three Hour Ago
  getHistoricalOddsThreeHourAgo(key: any, id: any, time: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }

  //Historical odds One Hour Ago
  getHistoricalOddsFourHourAgo(key: any, id: any, time: any): Observable<any> {
    return this.http.get(
      `https://api.the-odds-api.com/v4/historical/sports/${key}/events/${id}/odds?apiKey=5e7c521ab26381b068424419c586233a&regions=us&date=${time}&markets=h2h&bookmakers=fanduel&oddsFormat=american`
    );
  }
}
