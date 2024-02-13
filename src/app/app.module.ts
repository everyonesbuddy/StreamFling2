import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StripeCancelComponent } from './components/stripe-cancel/stripe-cancel.component';
import { StripeSuccessComponent } from './components/stripe-success/stripe-success.component';
import { SubscriptionCardComponent } from './components/subscription-card/subscription-card.component';
import { SubscriptionPageComponent } from './components/subscription-page/subscription-page.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { CompareOddsComponent } from './components/compare-odds/compare-odds.component';
import { AboutComponent } from './components/about/about.component';
import { NbaPointsPropDetailsPageComponent } from './components/nba-points-prop-details-page/nba-points-prop-details-page.component';
import { MlbStrikeoutsPropDetailsComponent } from './components/mlb-strikeouts-prop-details/mlb-strikeouts-prop-details.component';
import { NflPassingYardsPropsDetailsComponent } from './components/nfl-passing-yards-props-details/nfl-passing-yards-props-details.component';
import { MlbWalksPropDetailsComponent } from './components/mlb-walks-prop-details/mlb-walks-prop-details.component';
import { MlbHitsAllowedPropDetailsComponent } from './components/mlb-hits-allowed-prop-details/mlb-hits-allowed-prop-details.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { MarkdownModule } from 'ngx-markdown';
import { SoccerGoalsPropDetailsComponent } from './components/soccer-goals-prop-details/soccer-goals-prop-details.component';
import { NflReceivingYardsPropsDetailsComponent } from './components/nfl-receiving-yards-props-details/nfl-receiving-yards-props-details.component';
import { NflRushingYardsPropsDetailsComponent } from './components/nfl-rushing-yards-props-details/nfl-rushing-yards-props-details.component';
import { SoccerShotsPropDetailsComponent } from './components/soccer-shots-prop-details/soccer-shots-prop-details.component';
import { SoccerAssistsPropDetailsComponent } from './components/soccer-assists-prop-details/soccer-assists-prop-details.component';
import { ProductsComponent } from './components/products/products.component';
import { NbaReboundsPropDetailsPageComponent } from './components/nba-rebounds-prop-details-page/nba-rebounds-prop-details-page.component';
import { NbaAssistsPropDetailsPageComponent } from './components/nba-assists-prop-details-page/nba-assists-prop-details-page.component';
import { NbaPlayerAssistsPageComponent } from './components/nba-player-assists-page/nba-player-assists-page.component';
import { NbaPlayerPointsPageComponent } from './components/nba-player-points-page/nba-player-points-page.component';
import { NbaPlayerReboundsPageComponent } from './components/nba-player-rebounds-page/nba-player-rebounds-page.component';
import { SoccerPlayerShotsPageComponent } from './components/soccer-player-shots-page/soccer-player-shots-page.component';
import { SoccerPlayerAssistsPageComponent } from './components/soccer-player-assists-page/soccer-player-assists-page.component';
import { SoccerPlayerGoalsPageComponent } from './components/soccer-player-goals-page/soccer-player-goals-page.component';
import { NbaLiveAndUpcomingGamesComponent } from './components/nba-live-and-upcoming-games/nba-live-and-upcoming-games.component';
import { EplLiveAndUpcomingGamesComponent } from './components/epl-live-and-upcoming-games/epl-live-and-upcoming-games.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    OddsScreenComponent,
    NavbarComponent,
    HomeComponent,
    PlayerPropsScreenComponent,
    PlayerPropsPageComponent,
    DiscordBotComponent,
    LoginComponent,
    SignUpComponent,
    StripeCancelComponent,
    StripeSuccessComponent,
    SubscriptionCardComponent,
    SubscriptionPageComponent,
    SettingsPageComponent,
    CompareOddsComponent,
    AboutComponent,
    NbaPointsPropDetailsPageComponent,
    MlbStrikeoutsPropDetailsComponent,
    NflPassingYardsPropsDetailsComponent,
    MlbWalksPropDetailsComponent,
    MlbHitsAllowedPropDetailsComponent,
    BlogComponent,
    BlogPostComponent,
    SoccerGoalsPropDetailsComponent,
    NflReceivingYardsPropsDetailsComponent,
    NflRushingYardsPropsDetailsComponent,
    SoccerShotsPropDetailsComponent,
    SoccerAssistsPropDetailsComponent,
    ProductsComponent,
    NbaReboundsPropDetailsPageComponent,
    NbaAssistsPropDetailsPageComponent,
    NbaPlayerAssistsPageComponent,
    NbaPlayerPointsPageComponent,
    NbaPlayerReboundsPageComponent,
    SoccerPlayerShotsPageComponent,
    SoccerPlayerAssistsPageComponent,
    SoccerPlayerGoalsPageComponent,
    NbaLiveAndUpcomingGamesComponent,
    EplLiveAndUpcomingGamesComponent,
    SpinnerComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
