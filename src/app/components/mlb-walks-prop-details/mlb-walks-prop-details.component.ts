import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MlbPropsAnalysisService } from 'src/app/services/mlb-props-analysis.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-mlb-walks-prop-details',
  templateUrl: './mlb-walks-prop-details.component.html',
  styleUrls: ['./mlb-walks-prop-details.component.scss'],
})
export class MlbWalksPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersWalksLastFive: any = [];
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
        .getSpecificMlbPlayerWalksProps(player)
        .subscribe((res) => {
          this.playerData = res;
          this.playersWalksLastFive.push(
            res[0].walksFiveGamesAgo,
            res[0].walksFourGamesAgo,
            res[0].walksThreeGamesAgo,
            res[0].walksTwoGamesAgo,
            res[0].walksLastGame
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
            label: 'Player Walks last 5 Games (MLB)',
            data: this.playersWalksLastFive,
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
