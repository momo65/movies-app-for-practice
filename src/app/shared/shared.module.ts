import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
imports:[
  CommonModule,
  NgbPaginationModule
],
exports:[
  NgbPaginationModule,
  CommonModule
]
})
export class SharedModule{}
