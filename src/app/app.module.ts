import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerPropsComponent } from './components/player-props/player-props.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesPlayerPropsOddsComponent } from './components/games-player-props-odds/games-player-props-odds.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
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
import { GamesTraditionalOddsComponent } from './components/games-traditional-odds/games-traditional-odds.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerPropsComponent,
    OddsScreenComponent,
    NavbarComponent,
    GamesPlayerPropsOddsComponent,
    HomeComponent,
    PlayerPropsScreenComponent,
    PlayerPropsPageComponent,
    PromotionsComponent,
    DiscordBotComponent,
    LoginComponent,
    SignUpComponent,
    StripeCancelComponent,
    StripeSuccessComponent,
    SubscriptionCardComponent,
    SubscriptionPageComponent,
    SettingsPageComponent,
    GamesTraditionalOddsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
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
