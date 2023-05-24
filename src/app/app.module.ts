import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OddsScreenComponent } from './components/odds-screen/odds-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GamesComponent } from './components/games/games.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerPropsScreenComponent } from './components/player-props-screen/player-props-screen.component';
import { PlayerPropsPageComponent } from './components/player-props-page/player-props-page.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OddsScreenComponent,
    NavbarComponent,
    GamesComponent,
    HomeComponent,
    PlayerPropsScreenComponent,
    PlayerPropsPageComponent,
    PromotionsComponent,
    DiscordBotComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
