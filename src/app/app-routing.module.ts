import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeCarouselComponent } from './welcome-carousel/welcome-carousel.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: WelcomeCarouselComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent},
  { path: 'cart', component: CartComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
