import {Component, inject} from '@angular/core';
import {BasketElement} from './basket-element/basket-element';
import {ProductsService} from '../../services/products-service';
import {Button} from '../../components/button/button';

@Component({
  selector: 'app-basket',
  imports: [
    BasketElement,
    Button
  ],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {
  productService = inject(ProductsService);

}
