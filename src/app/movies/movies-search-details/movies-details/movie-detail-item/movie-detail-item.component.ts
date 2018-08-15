import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

import {Movie} from '../../../movie.model';
import {MoviesService} from '../../../movies.service';

@Component({
  selector: 'app-movie-detail-item',
  templateUrl: './movie-detail-item.component.html',
  styleUrls: ['./movie-detail-item.component.css']
})
export class MovieDetailItemComponent implements OnInit {
  @Input() movie:Movie;
  @Input() index:number;
  constructor(private router:Router,private moviesService:MoviesService) { }

  detailItem(){
    let movie=this.moviesService.getMovie(this.index);
    this.moviesService.detailedSearchMovies(movie.imdbID);
    this.router.navigate(['movies',this.index]);
  }

  ngOnInit() {
  }

}
