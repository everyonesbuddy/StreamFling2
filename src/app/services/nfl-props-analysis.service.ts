import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NflPropsAnalysisService {
  constructor(private http: HttpClient) {}

  //get all players passing yards data
  getNflPlayerPassingYardsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/5723d7f8-f232-453d-8b48-63fbf8dc7dca'
    );
  }

  // get specific player passing yard details
  getSpecificNflPlayerPassingYardsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/5723d7f8-f232-453d-8b48-63fbf8dc7dca/player/${player}`
    );
  }

  //get all players rushing yards data
  getNflPlayerRushingYardsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/519389cc-9e43-457b-8aee-9bd8c1f8d975'
    );
  }

  //get specific players rushing yards details
  getSpecificNflPlayerRushingYardsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/519389cc-9e43-457b-8aee-9bd8c1f8d975/player/${player}`
    );
  }

  //get all players receiving yards data
  getNflPlayerReceivingYardsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/8ef04191-2224-49ad-835d-0dae6d5311d9'
    );
  }

  //get specific players receiving yards data
  getSpecificNflPlayerReceivingYardsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/8ef04191-2224-49ad-835d-0dae6d5311d9/player/${player}`
    );
  }
}
