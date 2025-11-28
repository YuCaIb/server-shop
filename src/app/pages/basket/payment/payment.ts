import {Component, inject} from '@angular/core';
import {ProductsService} from '../../../services/products-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../services/contact-service';
import {Button} from '../../../components/button/button';

@Component({
  selector: 'app-payment',
  imports: [
    Button
  ],
  templateUrl: './payment.html',
  styleUrl: './payment.css',
})
export class Payment {
  productService = inject(ProductsService);

    paymentForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), ContactService.spaceValidator]),
      surname: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), ContactService.spaceValidator]),
      cardNumber: new FormControl('', [Validators.required, Validators.nullValidator,Validators.pattern('$$/^\\\\d+$/$$')]),
      expireMonth: new FormControl('', [Validators.required, Validators.pattern('$$/^((0?[1-9])|(1[0-2]))$/$$')]),
      expireYear: new FormControl('', [Validators.required,Validators.pattern('$$/^\\\\d+$/$$')]),
    })


}
