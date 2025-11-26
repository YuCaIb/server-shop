import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {MainShop} from './pages/main-shop/main-shop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MainShop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('server-shop');
}
