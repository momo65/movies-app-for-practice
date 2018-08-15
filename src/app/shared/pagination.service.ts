import {Subject} from 'rxjs';

export class PaginationService{
  page:number=1;
  totalResults:number=0;
  totalResultsChanged=new Subject<number>();
  pageChanged=new Subject<number>();

  constructor(){}

  getTotalResults(){
    return this.totalResults;
  }

  setTotalResults(tR){
    this.totalResults=tR;
    this.totalResultsChanged.next(this.totalResults);
  }

  getPage(){
    return this.page;
  }

  setPage(p:number){
    this.page=p;
    this.pageChanged.next(this.page);
  }
}
