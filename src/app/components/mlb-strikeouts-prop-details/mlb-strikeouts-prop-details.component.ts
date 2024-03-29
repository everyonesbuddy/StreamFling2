import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MlbPropsAnalysisService } from 'src/app/services/mlb-props-analysis.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mlb-strikeouts-prop-details',
  templateUrl: './mlb-strikeouts-prop-details.component.html',
  styleUrls: ['./mlb-strikeouts-prop-details.component.scss'],
})
export class MlbStrikeoutsPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersStrikeoutsLastFive: any = [];
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
        .getSpecificMlbPlayerStrikeoutsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          this.playersStrikeoutsLastFive.push(
            res[0].strikeoutsFiveGamesAgo,
            res[0].strikeoutsFourGamesAgo,
            res[0].strikeoutsThreeGamesAgo,
            res[0].strikeoutsTwoGamesAgo,
            res[0].strikeoutsLastGame
          );
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
            label: 'Player Strikeouts last 5 Games (MLB)',
            data: this.playersStrikeoutsLastFive,
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
