import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute,Params} from '@angular/router';

import {Movie} from '../../movie.model';
import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit,OnDestroy {
  @Input() movieIndex:number;
  movies:Movie[]=this.moviesService.getMovies();
  subscription:Subscription;

  constructor(private moviesService:MoviesService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription=this.moviesService.moviesChanged.subscribe(
      (movies)=>{
        this.movies=movies;
      }
    );
    this.route.params.subscribe(
      (params:Params)=>{
        this.movieIndex=+params['id'];
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
