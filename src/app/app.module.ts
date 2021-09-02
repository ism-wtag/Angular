import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './core/layout/employees/employees.component';
import { EditComponent } from './core/layout/employees/component/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ShowComponent } from './core/layout/employees/component/show/show.component';
import { FormComponent } from './shared/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesComponent,
    EditComponent,
    ShowComponent,
    FormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
