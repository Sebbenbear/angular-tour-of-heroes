import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';

const routes : Routes = [
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes) // forRoot is configured at the apps root lvel. gives service providers and directives for routing, initial nav.
  ]
})

export class AppRoutingModule { }
