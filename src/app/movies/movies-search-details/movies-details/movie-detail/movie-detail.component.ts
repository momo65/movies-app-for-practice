import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {MoviesService} from '../../../movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit,OnDestroy {
  movieDetail:any;
  subscription:Subscription

  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.movieDetail=this.moviesService.getMovieDetail();
    console.log(this.movieDetail);
    this.subscription=this.moviesService.movieDetailChanged.subscribe(
      (movieDetail)=>{
        this.movieDetail=movieDetail;
        console.log(this.movieDetail);
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
