import { Component } from '@angular/core';
import { employeeService } from '../services/employeeService';
import { FormBuilder, FormGroup } from '@angular/forms';
import { employee } from '../Models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employeeForm!: FormGroup;
  emp   = new employee();

  constructor(private formBuilder: FormBuilder,private _employeeservice: employeeService) {

    

  }

  ngOnInit() 
  {
    this.employeeForm = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      Email: ['']
    });
  }



  onSubmit(): void {

    debugger;
    this.emp.Id=0;
    this.emp.FirstName = this.employeeForm.controls["FirstName"].value;
    this.emp.LastName = this.employeeForm.controls["LastName"].value;
    this.emp.Email = this.employeeForm.controls["Email"].value;

    this._employeeservice.createEmployee(this.emp).subscribe( (res : any )=> {
debugger;
      if(res >0)
      {

      }

    });

   
  }
}
