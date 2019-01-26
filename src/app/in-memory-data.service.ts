import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const movies = [
      { id: 11, name: 'fight club' },
      { id: 12, name: 'forrest gump' },
      { id: 13, name: 'fargo' },
      { id: 14, name: 'the godfather' },
      { id: 15, name: 'schilndler\'s list' },
      { id: 16, name: 'raging bull' },
      { id: 17, name: 'casablanca' },
      { id: 18, name: 'citizen kane' },
      { id: 19, name: 'gone with the wind' },
      { id: 20, name: 'the wizard of oz' }
    ];
    return {movies};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 11;
  }
}
