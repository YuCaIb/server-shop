import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-mobile-header',
  imports: [
    NgClass
  ],
  templateUrl: './mobile-header.html',
  styleUrl: './mobile-header.css',
})
export class MobileHeader {

 isDropdownOpen: boolean = false;

 toggleDropdown() {
   this.isDropdownOpen = !this.isDropdownOpen;
 }

}
