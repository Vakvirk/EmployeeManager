import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { EmployeeList } from './features/Employee/components/employee-list/employee-list';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [{ path: '', component: EmployeeList }],
  },
];
