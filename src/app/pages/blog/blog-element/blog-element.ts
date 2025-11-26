import {Component, Input} from '@angular/core';
import {Button} from '../../../components/button/button';
import {Products} from '../../../interfaces/products';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-blog-element',
  imports: [
    Button,
    RouterLink
  ],
  templateUrl: './blog-element.html',
  styleUrl: './blog-element.css',
})
export class BlogElement {
  @Input() product!: Products;


}
