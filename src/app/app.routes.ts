import {Routes} from '@angular/router';
import {MainShop} from './pages/main-shop/main-shop';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Blog} from './pages/blog/blog';
import {Basket} from './pages/basket/basket';
import {CartDetails} from './pages/main-shop/cart-details/cart-details';

export const routes: Routes = [
  {path: '', component: MainShop, title: 'Shop'},
  {path: 'blog', component: Blog, title: 'Blog'},
  {path: 'about', component: About, title: 'About'},
  {path: 'contact', component: Contact, title: 'Contact'},
  {path: 'basket', component: Basket, title: 'basket'},
  {path: 'cart-details/:product_id', component: CartDetails, title: 'CartDetails'},
];
