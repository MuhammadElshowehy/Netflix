import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  popularMovies: MovieModel;

  constructor(private moviesServices: MoviesService) {}

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.moviesServices.getPopularMovies().subscribe((movies) => {
      this.popularMovies = movies;
    });
  }
}
