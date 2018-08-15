import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {MoviesComponent} from './movies.component';
import {MoviesSearchListComponent} from './movies-search-list/movies-search-list.component';
import {MoviesSearchDetailsComponent} from './movies-search-details/movies-search-details.component';
import {MoviesPurchasedComponent} from './movies-purchased/movies-purchased.component';
import {PurchasedGuard} from './purchased.guard';
import {MoviesGuard} from './movies.guard';

const moviesRoutes:Routes=[
  {path:'movies',component:MoviesComponent,children:[
    {path:'purchased',component:MoviesPurchasedComponent,canActivate:[PurchasedGuard]},
    {path:'',component:MoviesSearchListComponent},
    {path:':id',component:MoviesSearchDetailsComponent,canActivate:[MoviesGuard]}
  ]}
];

@NgModule({
  imports:[
    RouterModule.forRoot(moviesRoutes)
  ],
  exports:[
    RouterModule
  ],
  providers:[
    PurchasedGuard,MoviesGuard
  ]
})
export class MoviesRoutingModule{}
