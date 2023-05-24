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
      console.log('market_key', market_key);
      let eventId = params['eventId'];
      console.log('eventId', eventId);
      let sportKey = params['sportKey'];
      console.log('sportKey', sportKey);

      this.bettingOdds
        .getPlayerProps(market_key, eventId, sportKey)
        .subscribe((res) => {
          this.props = [res];
          console.log('res', res);
          console.log('props', this.props);
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
