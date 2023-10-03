export class MovieModel {
  public id: number;
  public genreIds: [];
  public title: string;
  public backdropPath: string;
  public originalLang: string;
  public originalTitle: string;
  public overview: string;
  public popularity: number;
  public posterPath: string;
  public releaseDate: string;
  public voteAverage: number;
  public voteCount: number;
  constructor(
    id: number,
    genreIds: [],
    title: string,
    backdropPath: string,
    originalLang: string,
    originalTitle: string,
    overview: string,
    popularity: number,
    posterPath: string,
    releaseDate: string,
    voteAverage: number,
    voteCount: number
  ) {
    (this.id = id),
      (this.genreIds = genreIds),
      (this.title = title),
      (this.backdropPath = backdropPath),
      (this.originalLang = originalLang),
      (this.originalTitle = originalTitle),
      (this.overview = overview),
      (this.popularity = popularity),
      (this.posterPath = posterPath),
      (this.releaseDate = releaseDate),
      (this.voteAverage = voteAverage),
      (this.voteCount = voteCount);
  }
}
