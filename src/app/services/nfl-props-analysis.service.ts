import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NflPropsAnalysisService {
  constructor(private http: HttpClient) {}

  getNflPlayerPassingYardsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/5723d7f8-f232-453d-8b48-63fbf8dc7dca'
    );
  }

  getSpecificNflPlayerPassingYardsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/5723d7f8-f232-453d-8b48-63fbf8dc7dca/player/${player}`
    );
  }
}
