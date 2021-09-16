import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './core/layout/employees/employees.component';
import { EditComponent } from './core/layout/employees/component/edit/edit.component';
import { ShowComponent } from './core/layout/employees/component/show/show.component';
import { RouteComponent } from './core/layout/route/route.component';
import { DepartmentComponent } from './core/layout/route/department/department.component';
import { EmployeeComponent } from './core/layout/route/employee/employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent,
  },
  {
    path: 'employee/add/:id',
    component: EditComponent,
  },
  {
    path: 'employee/edit/:id',
    component: EditComponent,
  },
  {
    path: 'employee/show/:id',
    component: ShowComponent,
  },
  {
    path: 'route',
    component: RouteComponent
  },
  {
    path: 'route/department',
    component: DepartmentComponent
  },
  {
    path: 'route/employee',
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
