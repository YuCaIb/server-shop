import {Component, inject} from '@angular/core';
import {NgClass} from '@angular/common';
import {ProductsService} from '../../../services/products-service';

@Component({
  selector: 'app-mobile-header',
  imports: [
    NgClass
  ],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {

  productService = inject(ProductsService);

 isDropdownOpen: boolean = false;

 toggleDropdown() {
   this.isDropdownOpen = !this.isDropdownOpen;
 }

}
