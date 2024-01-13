import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { NflPropsAnalysisService } from 'src/app/services/nfl-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-nfl-rushing-yards-props-details',
  templateUrl: './nfl-rushing-yards-props-details.component.html',
  styleUrls: ['./nfl-rushing-yards-props-details.component.scss'],
})
export class NflRushingYardsPropsDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersRushingYardsLastFive: any = [];
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
        .getSpecificNflPlayerRushingYardsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          this.playersRushingYardsLastFive.push(
            res[0].rushingYardsFiveGamesAgo,
            res[0].rushingYardsFourGamesAgo,
            res[0].rushingYardsThreeGamesAgo,
            res[0].rushingYardsTwoGamesAgo,
            res[0].rushingYardsLastGame
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
            label: 'Player Rushing Yards last 5 Games (NFL)',
            data: this.playersRushingYardsLastFive,
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
