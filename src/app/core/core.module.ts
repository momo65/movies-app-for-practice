import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

import {HeaderComponent} from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from '../app-routing.module'
import {MoviesService} from '../movies/movies.service';
import {PaginationService} from '../shared/pagination.service';
import {SearchService} from '../shared/search.service';

@NgModule({
declarations:[
  HeaderComponent,
  HomeComponent
],
imports:[
  CommonModule,
  RouterModule,
  AppRoutingModule
],
exports:[
  HeaderComponent,
  AppRoutingModule
],
providers:[
  MoviesService,PaginationService,NgbPaginationConfig,SearchService
]
})
export class CoreModule{}
