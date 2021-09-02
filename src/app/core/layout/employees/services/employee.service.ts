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

  onShow(id: Number){
    return this.employees.find(x=>x.id == id);
  }

  onGetEmployee(id: Number){
    return this.employees.find(x=>x.id == id);
  }

  onAdd(employee: Employee){
    this.employees.push(employee)
  }

  onDelete(id: Number){
    let employee = this.employees.find(x=>x.id == id)
    let index = this.employees.indexOf(employee, 0);
    this.employees.splice(index, 1);
  }

  onUpdate(employee: Employee){
    let pre_employee = this.employees.find(x=>x.id == employee.id);
    pre_employee.name = employee.name;
    pre_employee.email = employee.email;
    pre_employee.phone = employee.phone;
  }
}
