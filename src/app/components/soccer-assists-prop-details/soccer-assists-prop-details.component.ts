import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-soccer-assists-prop-details',
  templateUrl: './soccer-assists-prop-details.component.html',
  styleUrls: ['./soccer-assists-prop-details.component.scss'],
})
export class SoccerAssistsPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersAssistsLastFive: any = [];
  seasonAverage: any = '';
  lastFiveAverage: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private soccerPropsAnalysis: SoccerPropsAnalysisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let player = params['player'];
      this.soccerPropsAnalysis
        .getSpecificSoccerPlayerAssistsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          console.log('res', res);
          this.playersAssistsLastFive.push(
            res[0].assistsFiveGamesAgo,
            res[0].assistsFourGamesAgo,
            res[0].assistsThreeGamesAgo,
            res[0].assistsTwoGamesAgo,
            res[0].assistsLastGame
          );
          console.log('hdfhhh', this.playersAssistsLastFive);
          this.renderChart();
        });
    });
  }

  renderChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          '5 Games Ago',
          '4 Games Ago',
          '3 Games Ago',
          '2 Games Ago',
          'Last Game',
        ],
        datasets: [
          {
            label: 'Player Assists last 5 Games (All Soccer competitons)',
            data: this.playersAssistsLastFive,
            borderWidth: 1,
            backgroundColor: [
              'rgba(34, 40, 49)',
              // 'rgba(	34, 40, 49)',
              // 'rgba(	34, 40, 49)',
              // 'rgba(	34, 40, 49)',
            ],
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
