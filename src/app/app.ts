import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Home } from './core/home/home';

@Component({
  imports: [Header, Home, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projet1');
}
