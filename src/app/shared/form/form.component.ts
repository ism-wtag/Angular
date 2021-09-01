import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from 'src/app/core/layout/employees/services/employee.service';
import { Employee } from 'src/app/core/layout/employees/models/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  id: number;
  header: string;
  employee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';

    if (this.id != 0) {
      this.employee = this.employeeService.onGetEmployee(this.id);
      this.profileForm.setValue({
        id: this.employee.id, 
        name: this.employee.name,
        email: this.employee.email,
        phone: this.employee.phone
      });
    }
  }

  profileForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });

  onSubmit() {
    this.employee.id = this.profileForm.value.id;
    this.employee.name = this.profileForm.value.name;
    this.employee.email = this.profileForm.value.email;
    this.employee.phone = this.profileForm.value.phone;
    if (this.id === 0) {
      this.employeeService.onAdd(this.employee);
    } else {
      this.employeeService.onUpdate(this.employee);
    }
    this.router.navigateByUrl('');
  }
}
