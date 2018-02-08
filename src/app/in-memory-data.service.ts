import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', attack: 34, defense: 23, specialAttack: 47, specialDefense: 37, speed: 45},
      { id: 12, name: 'Narco', attack: 54, defense: 34, specialAttack: 34, specialDefense: 28, speed: 45},
      { id: 13, name: 'Bombasto', attack: 34, defense: 24, specialAttack: 35, specialDefense: 85, speed: 56},
      { id: 14, name: 'Celeritas', attack: 23, defense: 12, specialAttack: 86, specialDefense: 63, speed: 98},
      { id: 15, name: 'Magneta', attack: 76, defense: 43, specialAttack: 79, specialDefense: 43, speed: 86},
      { id: 16, name: 'RubberMan', attack: 37, defense: 16, specialAttack: 38, specialDefense: 27, speed: 57},
      { id: 17, name: 'Dynama', attack: 98, defense: 87, specialAttack: 23, specialDefense: 96, speed: 85 },
      { id: 18, name: 'Dr IQ', attack: 76, defense: 58, specialAttack: 36, specialDefense: 80, speed: 59 },
      { id: 19, name: 'Magma', attack: 27, defense: 64, specialAttack: 29, specialDefense: 70, speed: 34 },
      { id: 20, name: 'Tornado', attack: 11, defense: 43, specialAttack: 70, specialDefense: 52, speed: 34 }
    ];
    return {heroes};
  }
}