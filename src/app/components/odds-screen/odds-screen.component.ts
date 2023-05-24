import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AiService } from 'src/app/services/ai.service';
import { NgForm } from '@angular/forms';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-odds-screen',
  templateUrl: './odds-screen.component.html',
  styleUrls: ['./odds-screen.component.scss'],
})
export class OddsScreenComponent implements OnInit {
  odds: any = [];
  botResponse: any;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private bettingOdds: BettingOddsService,
    private aiService: AiService
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

  onInput(form: NgForm) {
    this.isLoading = true;
    //console.log(form.value.prompt);
    const promptValue = form.value.prompt;
    console.log('promptValue', promptValue.trim());

    if (promptValue.trim() === '') {
      this.isLoading = false;
      this.botResponse = 'Ask a sport betting question';
      return;
    }

    this.aiService.callAi(promptValue).subscribe((response: any) => {
      this.isLoading = false;
      console.log(response);
      this.botResponse = response.bot;
      console.log(this.botResponse);
    });
  }
}
