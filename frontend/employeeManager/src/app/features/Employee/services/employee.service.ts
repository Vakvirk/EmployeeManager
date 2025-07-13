import { Injectable } from '@angular/core';
import { Employee } from '../../../shared/models/employee';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url).pipe(
      catchError((error) => {
        console.log(error);
        return throwError(
          () => new Error('Nie udało się pobrać danych z serwera.')
        );
      })
    );
  }
}
