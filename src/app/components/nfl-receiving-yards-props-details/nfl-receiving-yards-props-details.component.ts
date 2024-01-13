import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { NflPropsAnalysisService } from 'src/app/services/nfl-props-analysis.service';
Chart.register(...registerables);

@Component({
  selector: 'app-nfl-receiving-yards-props-details',
  templateUrl: './nfl-receiving-yards-props-details.component.html',
  styleUrls: ['./nfl-receiving-yards-props-details.component.scss'],
})
export class NflReceivingYardsPropsDetailsComponent implements OnInit {
  playerData: any = [];
  chart: any = [];
  playersReceivingYardsLastFive: any = [];
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
        .getSpecificNflPlayerReceivingYardsProps(player)
        .subscribe((res) => {
          this.playerData = res;
          this.playersReceivingYardsLastFive.push(
            res[0].receivingYardsFiveGamesAgo,
            res[0].receivingYardsFourGamesAgo,
            res[0].receivingYardsThreeGamesAgo,
            res[0].receivingYardsTwoGamesAgo,
            res[0].receivingYardsLastGame
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
            label: 'Player Receiving Yards last 5 Games (NFL)',
            data: this.playersReceivingYardsLastFive,
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
