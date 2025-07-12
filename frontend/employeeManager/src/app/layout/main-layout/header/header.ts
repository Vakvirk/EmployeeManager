import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header>
      <nav
        class="navbar navbar-expand navbar-dark"
        style="background-color: #1a237e;"
      >
        <div class="container ms-0">
          <a class="navbar-brand" routerLink="/">EmployeeManager</a>
          <div class="navbar-nav ms-auto">
            <!-- Tutaj będą nav-linki -->
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: ``,
})
export class Header {}
