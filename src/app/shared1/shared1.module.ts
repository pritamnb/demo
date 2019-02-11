import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './components/pagination/pagination.component';

import { Shared1RoutingModule } from './shared1-routing.module';

@NgModule({
  imports: [
    CommonModule,
    Shared1RoutingModule
  ],
  exports: [
    PaginationComponent,
  ],
  declarations: [
    PaginationComponent,
  ]
})
export class Shared1Module { }
