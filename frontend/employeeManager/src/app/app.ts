import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeList } from './features/employee/components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [EmployeeList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'employeeManager';
}
