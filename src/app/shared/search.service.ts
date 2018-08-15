import {Subject} from 'rxjs';

export class SearchService{
  title:string='';
  type:string;
  year:string;
  titleChanged=new Subject<string>();
  typeChanged=new Subject<string>();
  yearChanged=new Subject<string>();

  constructor(){}

  getTitle(){
    return this.title;
  }

  setTitle(title:string){
    this.title=title;
    this.titleChanged.next(this.title);
  }

  getType(){
    return this.type;
  }

  setType(type:string){
    this.type=type;
    this.typeChanged.next(this.type);
  }

  getYear(){
    return this.year;
  }

  setYear(y:string){
    this.year=y;
    this.yearChanged.next(this.year);
  }
}
