import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies-list', component: MoviesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
