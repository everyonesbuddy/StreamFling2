import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';
import { Chart, registerables } from 'chart.js';
import { BettingOddsService } from 'src/app/services/betting-odds.service';
import { Observable } from 'rxjs';
Chart.register(...registerables);

@Component({
  selector: 'app-nba-rebounds-prop-details-page',
  templateUrl: './nba-rebounds-prop-details-page.component.html',
  styleUrls: ['./nba-rebounds-prop-details-page.component.scss'],
})
export class NbaReboundsPropDetailsPageComponent implements OnInit {
  nbaGames: any = [];
  playerData: any = [];
  reboundPropOdds: any = [];
  chart: any = [];
  playersReboundsLastFive: any = [];
  playersReboundsLineNextUpcomingOrLiveGame: any = [];
  seasonAverage: any = '';
  lastFiveAverage: any = '';
  gameId: any = '';
  reboundsLineOutputNextUpcomingOrLiveGames: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private nbaPropsAnalysis: NbaPropsAnalysisService,
    private bettingOdds: BettingOddsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // Get NBA Games info
      this.getNbaGamesInfo();

      // Get specific NBA player rebounds props
      let player = params['player'];
      this.nbaPropsAnalysis
        .getSpecificNbaPlayerReboundsProps(player)
        .subscribe((res) => {
          // Operation 1: Retrieve playerData
          this.playerData = res;

          // Operation 2: Extract player's last five rebounds
          this.playersReboundsLastFive.push(
            res[0].reboundsFiveGamesAgo,
            res[0].reboundsFourGamesAgo,
            res[0].reboundsThreeGamesAgo,
            res[0].reboundsTwoGamesAgo,
            res[0].reboundsLastGame
          );

          // Operation 3: Extract playersTeamName and playersName
          let playersTeamName = this.playerData[0].team;
          let playersName = this.playerData[0].player;

          // Operation 4: Extract gameId
          this.gameId = this.extractPlayersTeamUpcomingOrLiveGameId(
            this.nbaGames,
            playersTeamName
          );

          // Check if gameId is not null before proceeding
          if (this.gameId !== null) {
            // Operation 5: Extract player's rebound odds
            this.extractPlayerReboundOddsForUpcomingOrLiveGame(
              this.gameId,
              playersName
            ).subscribe((response) => {
              // Operation 6: Extract player's rebound line
              this.reboundsLineOutputNextUpcomingOrLiveGames =
                this.extractPlayerReboundLine(response, playersName);

              // Operation 7: Push the extracted point for each upcoming or live game
              this.playersReboundsLineNextUpcomingOrLiveGame.push(
                this.reboundsLineOutputNextUpcomingOrLiveGames,
                this.reboundsLineOutputNextUpcomingOrLiveGames,
                this.reboundsLineOutputNextUpcomingOrLiveGames,
                this.reboundsLineOutputNextUpcomingOrLiveGames,
                this.reboundsLineOutputNextUpcomingOrLiveGames
              );

              // Operation 8: Render the chart
              this.renderChart();
            });
          } else {
            // Handle the case when gameId is null (e.g., no game found for the player)
            console.log('No upcoming or live game found for the player.');
            this.renderChart();
          }
        });
    });
  }

  // Operation 9: Get NBA Games info
  getNbaGamesInfo() {
    this.bettingOdds.getNbaGamesData().subscribe((response) => {
      this.nbaGames = response;
    });
  }

  // Operation 10: Extract the ID of the upcoming or live game for the player's team
  extractPlayersTeamUpcomingOrLiveGameId(gamesArray: any, playersTeam: any) {
    for (let i = 0; i < gamesArray.length; i++) {
      const game = gamesArray[i];
      if (
        game.home_team.toLowerCase() === playersTeam.toLowerCase() ||
        game.away_team.toLowerCase() === playersTeam.toLowerCase()
      ) {
        return game.id;
      }
    }
    // Return null if no game found
    return null;
  }

  // Operation 11: Extract Fanduel NBA player props rebound odds for an upcoming or live game
  extractPlayerReboundOddsForUpcomingOrLiveGame(
    gameId: any,
    playersName: any
  ): Observable<any> {
    return this.bettingOdds.getFanduelNbaPlayerPropsReboundsOdds(gameId);
  }

  // Operation 12: Extract the player's rebound line from the response
  extractPlayerReboundLine(response: any, playersName: any): any {
    this.reboundPropOdds = response;

    let bookmakers = this.reboundPropOdds.bookmakers;

    for (const bookmaker of bookmakers) {
      const markets = bookmaker.markets;

      for (const market of markets) {
        if (market.key === 'player_rebounds') {
          const outcomes = market.outcomes;

          for (const outcome of outcomes) {
            if (
              outcome.description.toLowerCase() === playersName.toLowerCase()
            ) {
              return outcome.point;
            }
          }
        }
      }
    }

    // Return null if no outcome found for the player
    return null;
  }

  // Operation 13: Render the chart using Chart.js
  renderChart() {
    this.chart = new Chart('canvas', {
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
            type: 'bar',
            label: 'Player Rebounds last 5 Games (NBA)',
            data: this.playersReboundsLastFive,
            borderWidth: 1,
            backgroundColor: ['rgba(58, 117, 99)'],
            order: 2,
            borderRadius: 15,
            barPercentage: 0.7,
          },
          {
            type: 'line',
            label: 'Fanduel Next Game Line',
            data: this.playersReboundsLineNextUpcomingOrLiveGame,
            fill: false,
            borderColor: 'rgb(0, 0, 0)',
            order: 1,
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
