import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  getMovies(): void {
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
  }

  addMovie(name: string): void {
    name = name.trim();
    if (!name) return;
    this.movieService.addMovie({name} as Movie)
      .subscribe(movie => {
        this.movies.push(movie);
      });
  }

  deleteMovie(movie: Movie): void {
    this.movies = this.movies.filter(m => m.id !== movie.id)
    this.movieService.deleteMovie(movie)
      .subscribe()
  }

  ngOnInit() {
    this.getMovies()
  }

}
