import { Movie } from './movie';

export type TvShow = {
  id: number;
  genre_ids: [];
  name: string;
  backdrop_path: string;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  first_air_date: string;
};

export type TvShowResponse = {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
};

export function mapToMovies(tvShows: TvShow[]): Movie[] {
  return tvShows.map((tvShow: TvShow) => {
    return {
      ...tvShow,
      title: tvShow.name,
      original_title: tvShow.original_name,
    };
  });
}
