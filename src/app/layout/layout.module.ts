import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LayoutComponent
    
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class LayoutModule { }
