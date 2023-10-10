import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvShow, TvShowResponse } from '../types/tv-shows';

@Injectable({
  providedIn: 'root',
})
export class TvShowsService {
  api_url = 'https://api.themoviedb.org/3';
  api_key = 'c3890632afcd85c4851f3761d6ad2964';

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<TvShowResponse>(`${this.api_url}/tv/${type}?api_key=${this.api_key}`)
      .pipe(
        map((data: TvShowResponse) => {
          return <TvShow[]>data.results.slice(0, count);
        })
      );
  }
}
