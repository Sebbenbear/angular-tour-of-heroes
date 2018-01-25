import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) // forRoot is configured at the apps root lvel. gives service providers and directives for routing, initial nav.
  ]
})

export class AppRoutingModule { }
