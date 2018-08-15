import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {MoviesService} from '../../movies.service';
import {Movie} from '../../movie.model';
import {PaginationService} from '../../../shared/pagination.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit,OnDestroy {
  movies:Movie[]=this.moviesService.getMovies();
  subscription:Subscription;

  constructor(private moviesService:MoviesService,private paginationService:PaginationService) { }

  ngOnInit() {
    this.subscription=this.moviesService.moviesChanged.subscribe(
      (movies)=>{
        this.movies=movies;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
