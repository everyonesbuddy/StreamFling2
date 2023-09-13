import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MlbPropsAnalysisService {
  constructor(private http: HttpClient) {}

  getMlbPlayerStrikeoutsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3'
    );
  }

  getSpecificMlbPlayerStrikeoutsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/player/${player}`
    );
  }

  getMlbPlayerWalksProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Walks'
    );
  }

  getSpecificMlbPlayerWalksProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Walks/player/${player}`
    );
  }

  getMlbPlayerHitsAllowedProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Hits_Allowed'
    );
  }

  getSpecificMlbPlayerHitsAllowedProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/02466f37-6aab-4994-bb71-008f5c73aff3/tabs/MLB_Player_Props_Model_Hits_Allowed/player/${player}`
    );
  }
}
