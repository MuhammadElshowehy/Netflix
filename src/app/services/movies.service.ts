import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MoviesResponse } from '../types/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api_url = 'https://api.themoviedb.org/3';
  api_key = 'c3890632afcd85c4851f3761d6ad2964';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesResponse>(
      `${this.api_url}/movie/popular?api_key=${this.api_key}`
    );
  }
}
