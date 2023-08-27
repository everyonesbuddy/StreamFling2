import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { NflPropsAnalysisService } from 'src/app/services/nfl-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-nfl-passing-yards-props-details',
  templateUrl: './nfl-passing-yards-props-details.component.html',
  styleUrls: ['./nfl-passing-yards-props-details.component.scss'],
})
export class NflPassingYardsPropsDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersPassingYardsLastFive: any = [];
  seasonAverage: any = '';
  lastFiveAverage: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private nflPropsAnalysis: NflPropsAnalysisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let player = params['player'];
      this.nflPropsAnalysis
        .getSpecificNflPlayerPassingYardsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          console.log('res', res);
          this.playersPassingYardsLastFive.push(
            res[0].passingYardsFiveGamesAgo,
            res[0].passingYardsFourGamesAgo,
            res[0].passingYardsThreeGamesAgo,
            res[0].passingYardsTwoGamesAgo,
            res[0].passingYardsLastGame
          );
          console.log('hdfhhh', this.playersPassingYardsLastFive);
          this.renderChart();
        });
    });
  }

  renderChart() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: [
          'Passing Yards Five Games Ago',
          'Passing Yards Four Games Ago',
          'Passing Yards Three Games Ago',
          'Passing Yards Two Games Ago',
          'Passing Yards Last Game',
        ],
        datasets: [
          {
            label: 'Player Passing Yards last 5 Games (NFL)',
            data: this.playersPassingYardsLastFive,
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
