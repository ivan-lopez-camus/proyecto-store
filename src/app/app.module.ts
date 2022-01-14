import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { ContactModule } from './contact/contact.module';
import { DemoModule } from './demo/demo.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    LayoutModule,
    CoreModule,
    ProductsModule,
    ContactModule,
    DemoModule,
    PageNotFoundModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
