import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AiService } from 'src/app/services/ai.service';
import { BettingOddsService } from 'src/app/services/betting-odds.service';

@Component({
  selector: 'app-player-props-screen',
  templateUrl: './player-props-screen.component.html',
  styleUrls: ['./player-props-screen.component.scss'],
})
export class PlayerPropsScreenComponent implements OnInit {
  props: any = [];
  botResponse: any;
  isLoading: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private bettingOdds: BettingOddsService,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let market_key = params['market_key'];
      let eventId = params['eventId'];
      let sportKey = params['sportKey'];

      this.bettingOdds
        .getPlayerProps(market_key, eventId, sportKey)
        .subscribe((res) => {
          this.props = [res];
        });
    });
  }

  onInput(form: NgForm) {
    this.isLoading = true;
    const promptValue = form.value.prompt;

    if (promptValue.trim() === '') {
      this.isLoading = false;
      this.botResponse = 'Ask a sport betting question';
      return;
    }

    this.aiService.callAi(promptValue).subscribe((response: any) => {
      this.isLoading = false;
      this.botResponse = response.bot;
    });
  }
}
