import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MlbPropsAnalysisService } from 'src/app/services/mlb-props-analysis.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mlb-hits-allowed-prop-details',
  templateUrl: './mlb-hits-allowed-prop-details.component.html',
  styleUrls: ['./mlb-hits-allowed-prop-details.component.scss'],
})
export class MlbHitsAllowedPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersHitsAllowedLastFive: any = [];
  seasonAverage: any = '';
  lastFiveAverage: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private mlbPropsAnalysis: MlbPropsAnalysisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let player = params['player'];
      this.mlbPropsAnalysis
        .getSpecificMlbPlayerHitsAllowedProps(player)
        .subscribe((res) => {
          this.playerData = res;
          console.log('res', res);
          this.playersHitsAllowedLastFive.push(
            res[0].hitsAllowedFiveGamesAgo,
            res[0].hitsAllowedFourGamesAgo,
            res[0].hitsAllowedThreeGamesAgo,
            res[0].hitsAllowedTwoGamesAgo,
            res[0].hitsAllowedLastGame
          );
          console.log('hdfhhh', this.playersHitsAllowedLastFive);
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
            label: 'Player Hits Allowed last 5 Games (MLB)',
            data: this.playersHitsAllowedLastFive,
            borderWidth: 1,
            backgroundColor: [
              'rgba(165, 233, 225)',
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
