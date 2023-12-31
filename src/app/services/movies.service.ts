import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie, MoviesResponse } from '../types/movie';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  api_url = 'https://api.themoviedb.org/3';
  api_key = 'c3890632afcd85c4851f3761d6ad2964';

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesResponse>(
        `${this.api_url}/movie/${type}?api_key=${this.api_key}`
      )
      .pipe(
        map((data: MoviesResponse) => {
          return <Movie[]>data.results.slice(0, count);
        })
      );
  }
}
