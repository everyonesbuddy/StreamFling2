import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-nba-points-prop-details-page',
  templateUrl: './nba-points-prop-details-page.component.html',
  styleUrls: ['./nba-points-prop-details-page.component.scss'],
})
export class NbaPointsPropDetailsPageComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersPointsLastFive: any = [];
  seasonAverage: any = '';
  lastFiveAverage: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private nbaPropsAnalysis: NbaPropsAnalysisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let player = params['player'];
      this.nbaPropsAnalysis
        .getSpecificNbaPlayerPointsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          console.log('res', res);
          this.playersPointsLastFive.push(
            res[0].pointsFiveGamesAgo,
            res[0].pointsFourGamesAgo,
            res[0].pointsThreeGamesAgo,
            res[0].pointsTwoGamesAgo,
            res[0].pointsLastGame
          );
          console.log('hdfhhh', this.playersPointsLastFive);
          this.renderChart();
        });
    });
  }

  renderChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          'points Five Games Ago',
          'points Four Games Ago',
          'points Three Games Ago',
          'points Two Games Ago',
          'points Last Game',
        ],
        datasets: [
          {
            label: 'Player Points last 5 Games (NBA)',
            data: this.playersPointsLastFive,
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
