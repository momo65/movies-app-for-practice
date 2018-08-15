import { Component, OnInit,OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs';

import {MoviesService} from '../movies.service';
import {PaginationService} from '../../shared/pagination.service';

@Component({
  selector: 'app-movies-pagination-bar',
  templateUrl: './movies-pagination-bar.component.html',
  styleUrls: ['./movies-pagination-bar.component.css']
})
export class MoviesPaginationBarComponent implements OnInit,OnDestroy {
  page:number=this.paginationService.getPage();
  totalResults:number=this.paginationService.getTotalResults();
  subscription:Subscription;

  constructor(private moviesService:MoviesService,private paginationService:PaginationService) { }

  onPageChange(){
    this.paginationService.setPage(this.page);
  }

  ngOnInit() {
    this.subscription=this.paginationService.totalResultsChanged.subscribe(
      (totalResults)=>{
        this.totalResults=totalResults;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
