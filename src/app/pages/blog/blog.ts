import { Component } from '@angular/core';
import {BlogElement} from './blog-element/blog-element';
import {Products} from '../../interfaces/products';
import {ProductsService} from '../../services/products-service';

@Component({
  selector: 'app-blog',
  imports: [
    BlogElement
  ],
  templateUrl: './blog.html',
})
export class Blog {

  products: Products[] = [];


  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().then((products: (Products[])) => {
      this.products = products;
      console.log(this.products);
    });
  }
}
