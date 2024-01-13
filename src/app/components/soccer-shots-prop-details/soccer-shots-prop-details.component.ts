import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-soccer-shots-prop-details',
  templateUrl: './soccer-shots-prop-details.component.html',
  styleUrls: ['./soccer-shots-prop-details.component.scss'],
})
export class SoccerShotsPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersShotsLastFive: any = [];
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
        .getSpecificSoccerPlayerShotsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          this.playersShotsLastFive.push(
            res[0].shotsFiveGamesAgo,
            res[0].shotsFourGamesAgo,
            res[0].shotsThreeGamesAgo,
            res[0].shotsTwoGamesAgo,
            res[0].shotsLastGame
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
            label: 'Player Shots last 5 Games (All Soccer competitons)',
            data: this.playersShotsLastFive,
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
