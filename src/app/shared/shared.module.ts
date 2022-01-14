import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    HighlightDirective,
    ExponentialPipe
  ],
  
})
export class SharedModule {}