import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MovieModel>(
      'https://api.themoviedb.org/3/movie/popular?api_key=c3890632afcd85c4851f3761d6ad2964'
    );
  }
}
