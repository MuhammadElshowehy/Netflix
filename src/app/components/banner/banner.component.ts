import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() movies: Movie[] = [];
  @Input() title = '';
}
