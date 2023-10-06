import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SoccerPropsAnalysisService {
  constructor(private http: HttpClient) {}

  getSoccerPlayerGoalsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071'
    );
  }

  getSpecificSoccerPlayerGoalsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/7d7280c1-16cf-4eaf-8cb6-f14ee6809071/player/${player}`
    );
  }
}
