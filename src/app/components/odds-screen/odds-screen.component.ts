import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AiService } from 'src/app/services/ai.service';
import { NgForm } from '@angular/forms';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-odds-screen',
  templateUrl: './odds-screen.component.html',
  styleUrls: ['./odds-screen.component.scss'],
})
export class OddsScreenComponent implements OnInit {
  odds: any = [];
  botResponse: any;
  isLoading: boolean = false;
  currentTime: any;
  chart: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private bettingOdds: BettingOddsService,
    private aiService: AiService
  ) {}

  ngOnInit(): void {
    // // current time solution
    // const currentDate = new Date();
    // this.currentTime = currentDate;
    // console.log('currentTime', this.currentTime);
    // const iso8601CurrentTime = this.currentTime.toISOString();
    // console.log('iso8601CurrentTime', iso8601CurrentTime);
    // const currentWithoutMilliseconds = iso8601CurrentTime.slice(0, -5);
    // const currentTimeFormated = currentWithoutMilliseconds + 'Z';
    // console.log('currentTimeFormated', currentTimeFormated);

    // //1 hours ago time solution
    // const oneHourAgo = new Date(currentDate);
    // oneHourAgo.setHours(currentDate.getHours() - 1);
    // console.log('oneHourAgo', oneHourAgo);
    // const iso8601OneHourAgo = oneHourAgo.toISOString();
    // console.log('iso8601OneHourAgo', iso8601OneHourAgo);
    // const oneHourAgoWithoutMilliseconds = iso8601OneHourAgo.slice(0, -5);
    // const oneHourAgoFormated = oneHourAgoWithoutMilliseconds + 'Z';
    // console.log('oneHourAgoFormated', oneHourAgoFormated);

    // //2 hours ago time solution
    // const twoHourAgo = new Date(currentDate);
    // twoHourAgo.setHours(currentDate.getHours() - 2);
    // console.log('twoHourAgo', twoHourAgo);
    // const iso8601TwoHourAgo = twoHourAgo.toISOString();
    // console.log('iso8601TwoHourAgo', iso8601TwoHourAgo);
    // const twoHourAgoWithoutMilliseconds = iso8601TwoHourAgo.slice(0, -5);
    // const twoHourAgoFormated = twoHourAgoWithoutMilliseconds + 'Z';
    // console.log('twoHourAgoFormated', twoHourAgoFormated);

    // //3 hours ago time solution
    // const threeHourAgo = new Date(currentDate);
    // threeHourAgo.setHours(currentDate.getHours() - 3);
    // console.log('threeHourAgo', threeHourAgo);
    // const iso8601ThreeHourAgo = threeHourAgo.toISOString();
    // console.log('iso8601ThreeHourAgo', iso8601ThreeHourAgo);
    // const threeHourAgoWithoutMilliseconds = iso8601ThreeHourAgo.slice(0, -5);
    // const threeHourAgoFormated = threeHourAgoWithoutMilliseconds + 'Z';
    // console.log('threeHourAgoFormated', threeHourAgoFormated);

    // //4 hours ago time solution
    // const fourHourAgo = new Date(currentDate);
    // fourHourAgo.setHours(currentDate.getHours() - 4);
    // console.log('fourHourAgo', fourHourAgo);
    // const iso8601FourHourAgo = fourHourAgo.toISOString();
    // console.log('iso8601FourHourAgo', iso8601FourHourAgo);
    // const fourHourAgoWithoutMilliseconds = iso8601FourHourAgo.slice(0, -5);
    // const fourHourAgoFormated = fourHourAgoWithoutMilliseconds + 'Z';
    // console.log('fourHourAgoFormated', fourHourAgoFormated);

    this.activatedRoute.params.subscribe((params) => {
      let key = params['key'];
      console.log('key', key);
      let id = params['id'];
      console.log('id', id);
      this.bettingOdds.getOdds(key, id).subscribe((res) => {
        this.odds = res;
        console.log('res', res);
      });

      // this.renderChart();
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

  // chart code
  // renderChart() {
  //   this.chart = new Chart('canvas', {
  //     type: 'line',
  //     data: {
  //       labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //       datasets: [
  //         {
  //           label: 'Team One Line movement',
  //           data: [-118, -150, -130, -105, -120, -130],
  //           borderWidth: 1,
  //           fill: false,
  //           borderColor: 'rgb(75, 192, 192)',
  //           tension: 0.3,
  //         },
  //         {
  //           label: 'Away Team Line movement',
  //           data: [-102, 100, 130, 150, 120, 130],
  //           borderWidth: 1,
  //           fill: false,
  //           borderColor: 'rgba(34, 40, 49)',
  //           tension: 0.3,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }
}
