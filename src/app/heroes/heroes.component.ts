import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  displayedColumns = ['id', 'name'];
  dataSource = new HeroDataSource(this.heroService);
  
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Delete work to hero service
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
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
