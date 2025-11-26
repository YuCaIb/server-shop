import { Component } from '@angular/core';
import {BasketElement} from './basket-element/basket-element';

@Component({
  selector: 'app-basket',
  imports: [
    BasketElement
  ],
  templateUrl: './basket.html',
  styleUrl: './basket.css',
})
export class Basket {

}
