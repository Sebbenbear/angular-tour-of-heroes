import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.css']
})
export class HeroAddComponent implements OnInit {

  name: string;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;

  heroes: Hero[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }

  save(name: string, 
    attack: number, 
    defense: number, 
    specialAttack: number, 
    specialDefense: number, 
    speed: number
  ): void {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, attack, 
      defense, specialAttack, 
      specialDefense, speed } as Hero;
    this.heroService.addHero(hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
    this.goBack();
  }

}
