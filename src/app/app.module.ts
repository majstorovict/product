import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component'
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    data: {titile: 'Product List'}

  },
  {
    path: 'products-details/:id',
    component: ProductComponent,
    data: {titile: 'Product Details'}

  },
  {
    path: 'products-add',
    component: ProductAddComponent,
    data: {titile: 'Product Add'}

  },
  {
    path: 'products-edit/:id',
    component: ProductEditComponent,
    data: {titile: 'Product Edit'}

  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: '/full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
