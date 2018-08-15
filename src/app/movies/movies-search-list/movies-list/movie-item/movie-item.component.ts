import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

import {Movie} from '../../../movie.model';
import {MoviesService} from '../../../movies.service';
import {PaginationService} from '../../../../shared/pagination.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:Movie;
  @Input() index:number;

  constructor(private moviesService:MoviesService,private router:Router,private paginationService:PaginationService) { }

  goToDetails(){
    let movie=this.moviesService.getMovie(this.index);
    this.moviesService.detailedSearchMovies(movie.imdbID);
    this.router.navigate(['movies',this.index]);
  }

  purchasedForTS(){
    return this.moviesService.purchasedForTS(this.index+(this.paginationService.getPage()-1)*10);
  }

  onPurchaseActions(){
    if(this.purchasedForTS()){
      this.moviesService.cancelPurchase(this.index+(this.paginationService.getPage()-1)*10);
    }else{
      this.moviesService.purchaseMovie(this.movie,this.index+(this.paginationService.getPage()-1)*10);
    }
  }

  purchasedForTemplate(){
    return this.moviesService.purchasedForTemplate(this.index+(this.paginationService.getPage()-1)*10);
  }

  ngOnInit() {
  }

}
