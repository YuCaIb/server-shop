import {Component, inject} from '@angular/core';
import {Button} from '../../../components/button/button';
import {ActivatedRoute} from '@angular/router';
import {Products} from '../../../interfaces/products';
import {ProductsService} from '../../../services/products-service';

@Component({
  selector: 'app-cart-details',
  imports: [
    Button
  ],
  templateUrl: './cart-details.html',
})
export class CartDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  productService = inject(ProductsService);

  product: Products | undefined;

  constructor(private productsService: ProductsService) {
    const product_id = parseInt(this.route.snapshot.params['product_id'], 10);
    this.productsService.getById(product_id).then((product) => {
      this.product = product;
    });
  }

  protected readonly ProductsService = ProductsService;
}
