import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-soccer-goals-prop-details',
  templateUrl: './soccer-goals-prop-details.component.html',
  styleUrls: ['./soccer-goals-prop-details.component.scss'],
})
export class SoccerGoalsPropDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersGoalsLastFive: any = [];
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
        .getSpecificSoccerPlayerGoalsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          console.log('res', res);
          this.playersGoalsLastFive.push(
            res[0].goalsFiveGamesAgo,
            res[0].goalsFourGamesAgo,
            res[0].goalsThreeGamesAgo,
            res[0].goalsTwoGamesAgo,
            res[0].goalsLastGame
          );
          console.log('hdfhhh', this.playersGoalsLastFive);
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
            label: 'Player Goals last 5 Games (All Soccer competitons)',
            data: this.playersGoalsLastFive,
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
