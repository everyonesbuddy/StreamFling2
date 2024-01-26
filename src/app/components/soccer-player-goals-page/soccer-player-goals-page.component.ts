import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SoccerPropsAnalysisService } from 'src/app/services/soccer-props-analysis.service';

@Component({
  selector: 'app-soccer-player-goals-page',
  templateUrl: './soccer-player-goals-page.component.html',
  styleUrls: ['./soccer-player-goals-page.component.scss'],
})
export class SoccerPlayerGoalsPageComponent implements OnInit {
  soccerPlayerGoalsProps: any = [];

  constructor(
    private router: Router,
    private soccerPropsAnalysis: SoccerPropsAnalysisService
  ) {}

  ngOnInit(): void {
    // get Soccer Player Goals props
    this.getSoccerPlayerGoalsProps();
  }

  //get all players goals data
  getSoccerPlayerGoalsProps() {
    this.soccerPropsAnalysis
      .getSoccerPlayerGoalsProps()
      .subscribe((response) => {
        this.soccerPlayerGoalsProps = response;
      });
  }

  //get specific player goals details
  getSoccerPlayerGoalsPropDetails(player: any) {
    this.router.navigate(['soccerGoalsPropDetailsPage/' + player]);
  }
}
