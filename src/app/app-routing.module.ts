import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'oddsScreen/:key/:id',
    component: OddsScreenComponent,
  },
  {
    path: 'games/:key',
    component: GamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
