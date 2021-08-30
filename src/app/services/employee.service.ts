import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [
    {
      id: 1,
      name: "Mujahid",
      email: "mujahid@gmail.com",
      phone: '01521325296'
    },
    {
      id: 2,
      name: "Farabi",
      email: "farabi@gmail.com",
      phone: '01685302764'
    }
  ];

  constructor() { }

  onGet(){
    return this.employees;
  }

  onAdd(employee: Employee){
    this.employees.push(employee)
  }
}
