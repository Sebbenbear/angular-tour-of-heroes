import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './hero-add/hero-add.component';

const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'addhero', component: HeroAddComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // forRoot is configured at the apps root lvel. gives service providers and directives for routing, initial nav.
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
