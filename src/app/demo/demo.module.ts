import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';



@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
