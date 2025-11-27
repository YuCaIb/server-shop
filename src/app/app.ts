import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Header} from './components/header/header';
import {MainShop} from './pages/main-shop/main-shop';
import {MobileHeader} from './components/header/mobile-header/mobile-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MobileHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('server-shop');
}
