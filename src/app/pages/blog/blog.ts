import { Component } from '@angular/core';
import {BlogElement} from './blog-element/blog-element';

@Component({
  selector: 'app-blog',
  imports: [
    BlogElement
  ],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
