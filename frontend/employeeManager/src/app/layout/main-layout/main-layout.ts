import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header],
  template: `
    <app-header></app-header>
    <main><router-outlet></router-outlet></main>
  `,
  styles: ``,
})
export class MainLayout {}
