import { Routes } from '@angular/router';
import {MainShop} from './pages/main-shop/main-shop';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {Blog} from './pages/blog/blog';
import {Basket} from './pages/basket/basket';

export const routes: Routes = [
  {path:'', component: MainShop, title: 'Server-Shop'},
  {path:'blog', component: Blog, title: 'Server-Blog'},
  {path:'about', component: About, title: 'Server-About'},
  {path:'contact', component: Contact, title: 'Server-contact'},
  {path:'basket', component: Basket, title: 'Server-basket'},
];
