import {Movie} from '../movies/movie.model';

export class PurchasedMovie{
  index:number;
  Poster:string;
  Title:string;
  Type:string;
  Year:string;
  imdbID:string;

  constructor(movie:Movie,i:number){
    this.index=i;
    this.Poster=movie.Poster;
    this.Title=movie.Title;
    this.Type=movie.Type;
    this.Year=movie.Year;
    this.imdbID=movie.imdbID;
  }
}
