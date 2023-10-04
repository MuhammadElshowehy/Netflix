import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesResponse } from 'src/app/types/movie';
import { imageBaseUrl } from 'src/app/constants/images';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('0.5s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  popularMovies: MoviesResponse;
  slideIndex = 0;
  imageBaseUrl = imageBaseUrl;

  constructor(private moviesServices: MoviesService) {}

  ngOnInit() {
    this.moviesServices.getPopularMovies().subscribe((res) => {
      this.popularMovies = res;
    });
    this.changeSlide();
  }

  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex === 19) {
        this.slideIndex = 0;
      }
    }, 3000);
  }
}
