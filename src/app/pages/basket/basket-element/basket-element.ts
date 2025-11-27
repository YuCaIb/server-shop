import {Component, inject, Input} from '@angular/core';
import {Button} from '../../../components/button/button';
import {Products} from '../../../interfaces/products';
import {ProductsService} from '../../../services/products-service';

@Component({
  selector: 'app-basket-element',
  imports: [Button],
  templateUrl: './basket-element.html',
})
export class BasketElement {
  @Input() product!: Products;
  productService =  inject(ProductsService);


}
