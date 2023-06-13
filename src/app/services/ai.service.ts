import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AiService {
  constructor(private http: HttpClient, private router: Router) {}

  callAi(promptValue: string) {
    const url = 'https://streamfling-be.herokuapp.com/';
    // const url = 'https://streamfling-be.herokuapp.com/api/prompt-ai';
    const promptData = { prompt: promptValue };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, promptData, { headers });
  }
}
