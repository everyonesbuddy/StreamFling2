import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoccerPropsAnalysisService {
  constructor(private http: HttpClient) {}

  //get all players goals data
  getSoccerPlayerGoalsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071'
    );
  }

  //get specific player goals details
  getSpecificSoccerPlayerGoalsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/player/${player}`
    );
  }

  //get all players shots data
  getSoccerPlayerShotsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/tabs/Soccer_Player_Props_Model_Shots'
    );
  }

  //get specific player shots details
  getSpecificSoccerPlayerShotsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/tabs/Soccer_Player_Props_Model_Shots/player/${player}`
    );
  }

  //get all players assists data
  getSoccerPlayerAssistsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/tabs/Soccer_Player_Props_Model_Assists'
    );
  }

  //get specific player assists details
  getSpecificSoccerPlayerAssistsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/tabs/Soccer_Player_Props_Model_Assists/player/${player}`
    );
  }
}
