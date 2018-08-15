import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

import {PurchasedMovie} from '../../../shared/purchased-movie.model';
import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-movie-purchased-item',
  templateUrl: './movie-purchased-item.component.html',
  styleUrls: ['./movie-purchased-item.component.css']
})
export class MoviePurchasedItemComponent implements OnInit {
  @Input() pMovie:PurchasedMovie;
  @Input() index:number;

  constructor(private moviesService:MoviesService,private router:Router) { }

  onUnpurchase(){
    this.moviesService.cancelPurchase2(this.index);
  }

  goDetails(){
    this.router.navigate(['/movies',''+this.pMovie.index]);
  }

  ngOnInit() {
  }

}
