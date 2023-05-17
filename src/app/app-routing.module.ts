import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { PromotionsComponent } from './components/promotions/promotions.component';

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
    path: 'promotions',
    component: PromotionsComponent,
  },
  {
    path: 'bot',
    component: DiscordBotComponent,
  },
  {
    path: 'oddsScreen/:key/:id',
    component: OddsScreenComponent,
  },
  {
    path: 'games/:key',
    component: GamesComponent,
  },
  {
    path: 'playerPropsScreen/:sportKey/:market_key/:eventId',
    component: PlayerPropsScreenComponent,
  },
  {
    path: 'playerPropsPage/:key/:id',
    component: PlayerPropsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
