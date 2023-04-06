import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-odds-screen',
  templateUrl: './odds-screen.component.html',
  styleUrls: ['./odds-screen.component.scss'],
})
export class OddsScreenComponent implements OnInit {
  odds: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let key = params['key'];
      console.log('key', key);
      let id = params['id'];
      console.log('id', id);
      this.bettingOdds.getOdds(key, id).subscribe((res) => {
        this.odds = res;
        console.log('res', res);
      });
    });
  }
}
