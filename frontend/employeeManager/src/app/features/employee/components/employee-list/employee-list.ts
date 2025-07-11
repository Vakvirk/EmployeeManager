import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../../../shared/models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emlpoyee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employees: Employee[] = [];
  employee: Employee = {} as Employee;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((data) => (this.employees = data));
    this.employeeService
      .getEmployeeById(4)
      .subscribe((data) => (this.employee = data));
    console.log(this.employee);
  }
}
