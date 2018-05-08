import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateOrderComponent } from './orders/create-order.component';
import { HttpModule } from '@angular/http';
import { OrderService } from './orders/order.service';
import { ItemService } from './items/item.service';
<<<<<<< HEAD
import { ProductListComponent } from './products/product-list.component';
import { OrderDetailComponent } from './orders/order-detail.component';
import { ProductApiService } from './products/product.service';
=======
import { OrderDetailComponent } from './orders/order-detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthGuardService } from './authentication/auth-guard.service';
>>>>>>> loginbranch

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    OrderDetailComponent,
<<<<<<< HEAD
    ProductListComponent
=======
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
>>>>>>> loginbranch
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot([
<<<<<<< HEAD
      { path: 'createorder', component: CreateOrderComponent},
      { path: 'orderdetail/:id', component: OrderDetailComponent},
      { path: 'products', component: ProductListComponent},
      { path: '', redirectTo: 'createorder', pathMatch: 'full'},
      { path: '**', redirectTo: 'createorder', pathMatch: 'full'}
    ])
  ],
  // providers: [OrderService, ItemService],
  providers: [OrderService, ItemService, ProductApiService],
=======
      { path: 'createorder', component: CreateOrderComponent, canActivate: [AuthGuardService]},
      { path: 'orderdetail/:id', component: OrderDetailComponent},
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'profile', component: ProfileComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: '**', redirectTo: 'createorder', pathMatch: 'full'}
    ])
  ],
  providers: [OrderService, ItemService, AuthenticationService, AuthGuardService],
>>>>>>> loginbranch
  bootstrap: [AppComponent]
})
export class AppModule { }
