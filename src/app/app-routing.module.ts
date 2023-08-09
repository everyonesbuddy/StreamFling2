import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerPropsComponent } from './components/player-props/player-props.component';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { GamesTraditionalOddsComponent } from './components/games-traditional-odds/games-traditional-odds.component';
import { GamesPlayerPropsOddsComponent } from './components/games-player-props-odds/games-player-props-odds.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'subscriptions',
    component: SubscriptionPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'stripe/success',
    component: StripeSuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'settings',
    component: SettingsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'playerProps',
    component: PlayerPropsComponent,
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
    path: 'gamesPlayerPropsOdds/:key',
    component: GamesPlayerPropsOddsComponent,
  },
  {
    path: 'gamesTraditionalOdds/:key',
    component: GamesTraditionalOddsComponent,
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
  providers: [AuthGuard],
})
export class AppRoutingModule {}
