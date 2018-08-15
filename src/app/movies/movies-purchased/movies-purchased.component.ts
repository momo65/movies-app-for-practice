import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

import {MoviesService} from '../movies.service';
import {PurchasedMovie} from '../../shared/purchased-movie.model';

@Component({
  selector: 'app-movies-purchased',
  templateUrl: './movies-purchased.component.html',
  styleUrls: ['./movies-purchased.component.css']
})
export class MoviesPurchasedComponent implements OnInit,OnDestroy {
  purchasedMovies:PurchasedMovie[]=this.moviesService.getPurchasedMovies();
  subscription:Subscription;

  constructor(private moviesService:MoviesService,private router:Router) {}

  ngOnInit() {
    this.subscription=this.moviesService.purchasedChanged.subscribe(
      (pMovies)=>{
        console.log(pMovies);
        this.purchasedMovies=pMovies;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
