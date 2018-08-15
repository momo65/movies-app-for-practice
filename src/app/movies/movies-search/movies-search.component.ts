import { Component, OnInit,ViewChild,OnDestroy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {MoviesService} from '../movies.service';
import {PaginationService} from '../../shared/pagination.service';
import {SearchService}from '../../shared/search.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit,OnDestroy {
  @ViewChild('f') smForm:NgForm;
  subscription:Subscription;

  constructor(private moviesService:MoviesService,private paginationService:PaginationService,
              private searchService:SearchService) { }

  ngOnInit() {
    setTimeout(()=>{
      this.smForm.setValue({
        movieTitle:'',
        movieType:'',
        releaseYear:''
      });
    },10);
    this.subscription=this.paginationService.pageChanged.subscribe(
      (newPage)=>{
        console.log(newPage);
        console.log(12345);
        console.log(this.searchService.getTitle());
        this.moviesService.broadedSearchMovies(this.searchService.getTitle(),this.searchService.getType(),
          this.searchService.getYear(),newPage);
      }
    );
  }

  onSearch(f:NgForm){
    let title,type,year;
    title=f.value.movieTitle;
    type=f.value.movieType;
    year=f.value.releaseYear;
    this.searchService.setTitle(title);
    this.searchService.setType(type);
    this.searchService.setYear(year);
    this.moviesService.broadedSearchMovies(title,type,year,1);
  }

  onClear(){
    setTimeout(()=>{
      this.smForm.setValue({
        movieTitle:'',
        movieType:this.smForm.value.movieType,
        releaseYear:''
      })
    },10);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
