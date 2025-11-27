import {Component, inject} from '@angular/core';
import {ProductsService} from '../../services/products-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  productService = inject(ProductsService);

}
