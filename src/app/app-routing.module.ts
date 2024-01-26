import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { CompareOddsComponent } from './components/compare-odds/compare-odds.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { AuthGuard } from './guard/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { NbaPointsPropDetailsPageComponent } from './components/nba-points-prop-details-page/nba-points-prop-details-page.component';
import { MlbStrikeoutsPropDetailsComponent } from './components/mlb-strikeouts-prop-details/mlb-strikeouts-prop-details.component';
import { NflPassingYardsPropsDetailsComponent } from './components/nfl-passing-yards-props-details/nfl-passing-yards-props-details.component';
import { MlbWalksPropDetailsComponent } from './components/mlb-walks-prop-details/mlb-walks-prop-details.component';
import { MlbHitsAllowedPropDetailsComponent } from './components/mlb-hits-allowed-prop-details/mlb-hits-allowed-prop-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { SoccerGoalsPropDetailsComponent } from './components/soccer-goals-prop-details/soccer-goals-prop-details.component';
import { NflReceivingYardsPropsDetailsComponent } from './components/nfl-receiving-yards-props-details/nfl-receiving-yards-props-details.component';
import { NflRushingYardsPropsDetailsComponent } from './components/nfl-rushing-yards-props-details/nfl-rushing-yards-props-details.component';
import { SoccerShotsPropDetailsComponent } from './components/soccer-shots-prop-details/soccer-shots-prop-details.component';
import { SoccerAssistsPropDetailsComponent } from './components/soccer-assists-prop-details/soccer-assists-prop-details.component';
import { ProductsComponent } from './components/products/product.component';
import { NbaReboundsPropDetailsPageComponent } from './components/nba-rebounds-prop-details-page/nba-rebounds-prop-details-page.component';
import { NbaAssistsPropDetailsPageComponent } from './components/nba-assists-prop-details-page/nba-assists-prop-details-page.component';

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
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
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
    path: 'bot',
    component: DiscordBotComponent,
  },
  {
    path: 'oddsScreen/:key/:id',
    component: OddsScreenComponent,
  },
  {
    path: 'compareOdds/:key',
    component: CompareOddsComponent,
  },

  {
    path: 'playerPropsScreen/:sportKey/:market_key/:eventId',
    component: PlayerPropsScreenComponent,
  },
  {
    path: 'playerPropsPage/:key/:id',
    component: PlayerPropsPageComponent,
  },
  {
    path: 'nbaPointsPropDetailsPage/:player',
    component: NbaPointsPropDetailsPageComponent,
  },
  {
    path: 'nbaReboundsPropDetailsPage/:player',
    component: NbaReboundsPropDetailsPageComponent,
  },
  {
    path: 'nbaAssistsPropDetailsPage/:player',
    component: NbaAssistsPropDetailsPageComponent,
  },
  {
    path: 'mlbStrikeoutsPropDetailsPage/:player',
    component: MlbStrikeoutsPropDetailsComponent,
  },
  {
    path: 'mlbWalksPropDetailsPage/:player',
    component: MlbWalksPropDetailsComponent,
  },
  {
    path: 'mlbHitsAllowedPropDetailsPage/:player',
    component: MlbHitsAllowedPropDetailsComponent,
  },
  {
    path: 'nflPassingYardsPropDetailsPage/:player',
    component: NflPassingYardsPropsDetailsComponent,
  },
  {
    path: 'nflReceivingYardsPropDetailsPage/:player',
    component: NflReceivingYardsPropsDetailsComponent,
  },
  {
    path: 'nflRushingYardsPropDetailsPage/:player',
    component: NflRushingYardsPropsDetailsComponent,
  },
  {
    path: 'soccerGoalsPropDetailsPage/:player',
    component: SoccerGoalsPropDetailsComponent,
  },
  {
    path: 'soccerShotsPropDetailsPage/:player',
    component: SoccerShotsPropDetailsComponent,
  },
  {
    path: 'soccerAssistsPropDetailsPage/:player',
    component: SoccerAssistsPropDetailsComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog-post/:slug/:id',
    component: BlogPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
