import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbaPropsAnalysisService } from 'src/app/services/nba-props-analysis.service';

@Component({
  selector: 'app-nba-player-rebounds-page',
  templateUrl: './nba-player-rebounds-page.component.html',
  styleUrls: ['./nba-player-rebounds-page.component.scss'],
})
export class NbaPlayerReboundsPageComponent implements OnInit {
  nbaPlayerReboundsProps: any = [];

  constructor(
    private router: Router,
    private nbaPropsAnalysis: NbaPropsAnalysisService
  ) {}

  ngOnInit(): void {
    //get NBA PLayer Rebounds Props
    this.getNbaPlayerReboundsProps();
  }

  getNbaPlayerReboundsProps() {
    this.nbaPropsAnalysis.getNbaPlayerReboundsProps().subscribe((response) => {
      this.nbaPlayerReboundsProps = response;
    });
  }

  getNbaPlayerReboundPropDetails(player: any) {
    this.router.navigate(['/nbaReboundsPropDetailsPage/' + player]);
  }
}
