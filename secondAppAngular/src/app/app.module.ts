import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductFeatureModule } from './product-feature/product-feature.module';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    //ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductFeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
