import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

import {Movie} from './movie.model';
import {PurchasedMovie} from '../shared/purchased-movie.model';
import {PaginationService} from '../shared/pagination.service';

@Injectable()
export class MoviesService{
  movies:Movie[]=[];
  posters:any;
  moviesChanged=new Subject<Movie[]>();
  //posterChanged=new Subject<any>();
  purchasedMovies:PurchasedMovie[]=[];
  purchasedChanged=new Subject<PurchasedMovie[]>();
  response:string;
  movieDetail:any;
  movieDetailChanged=new Subject<any>();

  constructor(private httpClient:HttpClient,private paginationService:PaginationService){}

  formUrl(prefix:string,title?:string,type?:string,year?:string,page?:number){
    let url=prefix;
    if(title!=''){
      url+="s="+title+'&';
    }
    if(type!=''){
      url+="type="+type+'&';
    }
    if(year!=''){
      url+="y="+year+'&';
    }
    url+="page="+page+'&'
    return url;
  }

  broadedSearchMovies(title:string,type?:string,year?:string,page?:number){
    let url=this.formUrl("http://www.omdbapi.com/?apikey=8f73cb3a&",title,type,year,page);
    this.httpClient.get(url+"r=json").pipe(tap(
      (moviesData)=>{
        this.response=moviesData['Response'];
        this.paginationService.setTotalResults(moviesData['totalResults']);
        this.movies=moviesData['Search'];
        this.movieDetail=this.movies[0];
        this.movieDetailChanged.next(this.movieDetail);
        this.moviesChanged.next(this.movies.slice());
      }
    ),catchError(
      (error,X)=>{
        console.log(error);
        return X;
      }
    )).subscribe();
  }

  getMovieDetail(){
    return this.movieDetail;
  }

  detailedSearchMovies(id:string){
    this.httpClient.get("http://www.omdbapi.com/?apikey=8f73cb3a&i="+id+"&r=json").pipe(tap(
      (movieDetail)=>{
        this.movieDetail=movieDetail;
        this.movieDetailChanged.next({...this.movieDetail});
      }
    ),catchError(
      (error,X)=>{
        console.log(error);
        return X;
      }
    )).subscribe();
  }

  getMovie(i:number){
    return this.movies[i];
  }

  purchasedForTS(i:number){
    for(let pMovie of this.purchasedMovies){
      if(pMovie.index===i){
        return true;
      }
    }
    return false;
  }

  purchasedForTemplate(i:number){
    for(let pMovie of this.purchasedMovies){
      if(pMovie.index===i){
        return true;
      }
    }
    return false;
  }

  cancelPurchase2(i:number){
    this.purchasedMovies.splice(i,1);
    this.purchasedChanged.next(this.purchasedMovies.slice());
  }

  cancelPurchase(i:number){
    let foundIndex=false;
    for(let j=0;(j<this.purchasedMovies.length && !foundIndex);j++){
      if(this.purchasedMovies[j].index===i){
        this.purchasedMovies.splice(j,1);
        this.purchasedChanged.next(this.purchasedMovies.slice());
        foundIndex=true;
      }
    }
  }

  purchaseMovie(movie:Movie,i:number){
    this.purchasedMovies.push(new PurchasedMovie(movie,i));
    this.purchasedChanged.next(this.purchasedMovies.slice());
  }

  getPurchasedMovies(){
    return this.purchasedMovies.slice();
  }

  getMovies(){
    return this.movies.slice();
  }

  getMoviePoster(title:string){
    this.httpClient.get("http://img.omdbapi.com/?apikey=8f73cb3a&"+title+"r=json").pipe(tap(
      (poster)=>{
        console.log(poster);
        //this.posterChanged.next({...posters});
      }
    ),catchError(
      (error,X)=>{
        console.log(error);
        return X;
      }
    )).subscribe();
  }
}
