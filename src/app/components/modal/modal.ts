import {Component, inject} from '@angular/core';
import {Payment} from '../../pages/basket/payment/payment';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {

  paymentS = inject(Payment);


}
