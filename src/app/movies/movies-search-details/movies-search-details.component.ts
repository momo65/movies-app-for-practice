import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-movies-search-details',
  templateUrl: './movies-search-details.component.html',
  styleUrls: ['./movies-search-details.component.css']
})
export class MoviesSearchDetailsComponent implements OnInit {
  movieIndex:number;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.movieIndex=+params['id'];
      }
    );
  }

}
