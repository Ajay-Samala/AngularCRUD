import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Employee } from 'src/app/service/employee.model';
import {  MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public forms: FormGroup;
  constructor(private dialogRef: MatDialogRef<EmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Employee,
    public service: EmployeeService,
    private formsbuilder: FormBuilder) { }

  ngOnInit(): void {

    this.forms = this.formsbuilder.group(
      {
        EmployeeID: [this.data.EmployeeID],
        Name: [this.data.Name],
        Email: [this.data.Email],
        RoleType: [this.data.RoleType],
        Status: [this.data.Status]
      }
    )
  }
  onNoClick(): void {

    this.dialogRef.close();

  }



  onSubmit() {
    if (isNaN(this.data.EmployeeID)) {
      this.InsertData(this.forms.value);
    }
    else {
      this.UpdateData(this.forms.value);
    }

    this.dialogRef.close();
  }
  OnClose()
  {
    this.dialogRef.close();
  }

  InsertData(emp: Employee) {

    this.service.PostData(emp).subscribe(
      res => {
        this.service.GetData();
      }
    );
  }
  UpdateData(emp:Employee) {
    this.service.UpdateData(emp).subscribe(
      res => {
        this.service.GetData();
      }
    );
  }
}
