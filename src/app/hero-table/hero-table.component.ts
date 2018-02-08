import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})

export class HeroTableComponent implements OnInit {
  heroes: Hero[];
  displayedColumns = ['id', 'name', 'attack', 'defense', 'specialAttack', 'specialDefense', 'speed'];
  dataSource = new HeroDataSource(this.heroService);

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}

export class HeroDataSource extends DataSource<any> {

  constructor(private heroService: HeroService) {
    super();
  }

  connect(): Observable<Hero[]> {
    return this.heroService.getHeroes();
  }

  disconnect() {}
}
