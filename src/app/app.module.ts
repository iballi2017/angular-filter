import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { HttpClientModule } from '@angular/common/http'
import { ProductItemComponent } from './components/product-list/product-item/product-item.component'
import { FormsModule } from '@angular/forms';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductItemComponent, CartComponent, CartItemComponent, CheckoutComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
