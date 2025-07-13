import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Employee } from '../../../shared/models/employee';
import { firstValueFrom } from 'rxjs';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController;

  const mockEmployees: Employee[] = [
    {
      id: 1,
      name: 'Bob',
      jobTitle: 'Junior Developer',
      email: 'bob@example.com',
      phone: '999999999',
      employeeCode: 'mockedUUID',
    },
    {
      id: 2,
      name: 'Adam',
      jobTitle: 'Senior Developer',
      email: 'adam@example.com',
      phone: '111111111',
      employeeCode: 'mockedUUID2',
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideZonelessChangeDetection(),
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all employees (HTTP GET)', () => {
    service.getAllEmployees().subscribe((employees) => {
      expect(employees.length).toBe(2);
      expect(employees).toEqual(mockEmployees);
    });

    const req = httpMock.expectOne('http://localhost:8080/employee');
    expect(req.request.method).toBe('GET');
    req.flush(mockEmployees);
  });

  it('should handle error when fetching employees fails', () => {
    service.getAllEmployees().subscribe({
      next: () => fail('Expected error, but got result'),
      error: (err) => {
        expect(err).toBeTruthy();
        expect(err.message).toBe('Nie udało się pobrać danych z serwera.');
      },
    });

    const req = httpMock.expectOne('http://localhost:8080/employee');
    expect(req.request.method).toBe('GET');
    req.flush('Server error', {
      status: 500,
      statusText: 'Internal Server Error',
    });
  });
});
