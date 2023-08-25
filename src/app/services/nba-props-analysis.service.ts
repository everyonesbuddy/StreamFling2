import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NbaPropsAnalysisService {
  constructor(private http: HttpClient) {}

  getNbaPlayerPointsProps(): Observable<any> {
    return this.http.get(
      'https://sheet.best/api/sheets/6ffde7e5-71ac-4827-b162-18ba2d90ecb9'
    );
  }

  getSpecificNbaPlayerPointsProps(player: any): Observable<any> {
    return this.http.get(
      `https://sheet.best/api/sheets/6ffde7e5-71ac-4827-b162-18ba2d90ecb9/player/${player}`
    );
  }
}
