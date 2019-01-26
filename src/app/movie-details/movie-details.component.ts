import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  constructor(private route: ActivatedRoute,
              private movieService: MovieService,
              private location: Location) { }

  ngOnInit(): void {
    this.getHero()
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }

  goBack(): void {
    this.location.back()
  }

  save(): void {
    this.movieService.updateMovie(this.movie)
      .subscribe(() => this.goBack());
  }
}
