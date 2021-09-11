import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './pages/employees/employees.component';
import { EditComponent } from './pages/employees/edit/edit.component';
import { ShowComponent } from './pages/employees/show/show.component';

const routes: Routes = [
  {
    path: "",
    component: EmployeesComponent
  },
  {
    path: "employee/add/:id",
    component: EditComponent
  },
  {
    path: "employee/edit/:id",
    component: EditComponent
  },
  {
    path: "employee/show/:id",
    component: ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
