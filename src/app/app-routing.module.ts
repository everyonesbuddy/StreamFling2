import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscordBotComponent } from './components/discord-bot/discord-bot.component';
import { HomeComponent } from './components/home/home.component';

import { BlogComponent } from './components/blog/blog.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'bot',
    component: DiscordBotComponent,
  },

  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog-post/:slug/:id',
    component: BlogPostComponent,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
