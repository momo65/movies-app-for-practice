import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

import {MoviesService} from './movies.service';

@Injectable()
export class PurchasedGuard implements CanActivate{

  constructor(private moviesService:MoviesService){}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    return (this.moviesService.getPurchasedMovies().length>0);
  }
}
