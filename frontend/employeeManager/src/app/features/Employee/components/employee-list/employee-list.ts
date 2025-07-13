import { Component, OnInit, signal } from '@angular/core';
import { Employee } from '../../../../shared/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css"
    />
    @if (isLoading()){
    <p>Ładowanie...</p>
    } @else if (error()) {
    <p>{{ error() }}</p>
    } @else{
    <div style="width: 75%; margin: 0 auto; margin-top: 1rem;">
      <div
        style="display: flex; flex-wrap: wrap; justify-content: flex-start; gap: 1rem;"
      >
        @for(employee of employees(); track employee.id) {
        <div
          class="card shadow-sm border-0"
          style="flex: 0 0 23%; min-width: 200px; transition: transform 0.2s ease-in-out;"
        >
          <div
            class="card-body d-flex flex-column align-items-center text-center"
          >
            <h5 class="card-title mb-1">{{ employee.name }}</h5>
            <h6 class="card-subtitle mb-3 text-muted">
              {{ employee.jobTitle }}
            </h6>
            <ul class="list-group list-group-flush w-100">
              <li
                class="list-group-item d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-envelope-fill me-2 text-primary"></i>
                <span class="long-text">{{ employee.email }}</span>
              </li>
              <li
                class="list-group-item d-flex align-items-center justify-content-center"
              >
                <i class="bi bi-telephone-fill me-2 text-success"></i>
                <span>{{ employee.phone }}</span>
              </li>
            </ul>
          </div>
        </div>
        }
      </div>
    </div>
    }
  `,
  styles: `
  .card:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
  cursor: pointer;
}
    .long-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    max-width: 100%;
  }
  
  `,
})
export class EmployeeList implements OnInit {
  constructor(private employeeService: EmployeeService) {}

  employees = signal<Employee[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees.set(data);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Nie udało się pobrać pracowników');
        this.isLoading.set(false);
      },
    });
  }
}
