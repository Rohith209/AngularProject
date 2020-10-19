import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductsListComponent } from './components/shopping-cart/products-list/products-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartListComponent } from './components/shopping-cart/cart/cart-list/cart-list.component';
import { ProductsItemComponent } from './components/shopping-cart/products-list/products-item/products-item.component';
import { ProductComponent } from './models/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductsListComponent,
    CartComponent,
    CartListComponent,
    ProductsItemComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
