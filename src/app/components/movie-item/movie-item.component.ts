import { Component, Input } from '@angular/core';
import { imageBaseUrl } from 'src/app/constants/images';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() item: Movie | null = null;

  imageBaseUrl = imageBaseUrl;
}
