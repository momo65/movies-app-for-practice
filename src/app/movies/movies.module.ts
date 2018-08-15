import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {MoviesComponent} from './movies.component';
import {MoviesSearchComponent} from './movies-search/movies-search.component';
import {MoviesListComponent} from './movies-search-list/movies-list/movies-list.component';
import { MovieDetailComponent } from './movies-search-details/movies-details/movie-detail/movie-detail.component';
import {MoviesRoutingModule} from './movies-routing.module';
import { MoviesPurchasedComponent } from './movies-purchased/movies-purchased.component';
import { MoviesDetailsComponent } from './movies-search-details/movies-details/movies-details.component';
import { MovieItemComponent } from './movies-search-list/movies-list/movie-item/movie-item.component';
import { MoviePurchasedItemComponent } from './movies-purchased/movie-purchased-item/movie-purchased-item.component';
import { MoviesSearchListComponent } from './movies-search-list/movies-search-list.component';
import { MoviesSearchDetailsComponent } from './movies-search-details/movies-search-details.component';
import { MovieDetailItemComponent } from './movies-search-details/movies-details/movie-detail-item/movie-detail-item.component';
import {SharedModule} from '../shared/shared.module';
import { MoviesPaginationBarComponent } from './movies-pagination-bar/movies-pagination-bar.component';

@NgModule({
  declarations:[
    MoviesComponent,
    MoviesSearchComponent,
    MoviesListComponent,
    MovieDetailComponent,
    MoviesPurchasedComponent,
    MoviesDetailsComponent,
    MovieItemComponent,
    MoviePurchasedItemComponent,
    MoviesSearchListComponent,
    MoviesSearchDetailsComponent,
    MovieDetailItemComponent,
    MoviesPaginationBarComponent
  ],
  imports:[
    FormsModule,
    SharedModule,
    MoviesRoutingModule,
    HttpClientModule
  ]
})
export class MoviesModule{}
