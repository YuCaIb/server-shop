import {Component} from '@angular/core';
import {Button} from '../../components/button/button';
import {Products} from '../../interfaces/products';
import {ProductsService} from '../../services/products-service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-main-shop',
  standalone: true,
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './main-shop.html',
})
export class MainShop {

  products: Products[] = [];

  constructor(private productsService: ProductsService) {
  this.productsService.getProducts().then((products: (Products[])) => {
    this.products = products;
    console.log(this.products);
  });
  }
}
