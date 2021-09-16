import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './core/layout/employees/employees.component';
import { EditComponent } from './core/layout/employees/component/edit/edit.component';
import { ShowComponent } from './core/layout/employees/component/show/show.component';
import { ContentComponent } from './core/layout/content/content.component';

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
    path: 'content',
    component: ContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
