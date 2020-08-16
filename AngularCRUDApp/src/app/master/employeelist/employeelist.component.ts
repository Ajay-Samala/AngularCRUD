import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/service/employee.model';
import { MatDialog} from '@angular/material/dialog'
import { EmployeeComponent } from '../employee/employee.component';
import{MatTableDataSource} from '@angular/material/table'
  import{MatSort}from '@angular/material/sort'



@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
  
})
export class EmployeelistComponent implements OnInit {
  searchkey : string;
emp : Employee;
listdata : MatTableDataSource<any>;
  constructor(private dialog : MatDialog, public service : EmployeeService) { }

displayedColumns :string[]=['Name','Email','RoleType','Status','Edit'];
@ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    
    this.fetchdata();

  }
  fetchdata()
  {console.log('called');
    this.service.GetData().subscribe(
      list=>{
        let array=list.map(
          item=>{
            return item;
          }
        )
        this.listdata=new MatTableDataSource(array);
        this.listdata.sort=this.sort;
      }
      
    )
  }

  Editform(emp : Employee)
  {
    this.dialog.afterAllClosed.subscribe(()=>this.fetchdata())
    this.dialog.open(EmployeeComponent ,{data : emp});
     
  }
  
  DeleteData(emp : Employee)
  {
     this.service.DeleteData(emp).subscribe(res=>
      {
        this.fetchdata();
      });
    
    
  }
  SelectStatusImage(emp:Employee)
  {
    let rtn="";;
    if(emp.Status=='Active')
    {
rtn="../../../assets/ico_active.svg";
    }
    else if(emp.Status =='Inactive')
    {
      rtn="../../../assets/ico_inactive.svg";
    }
    else if(emp.Status=='Pending'){
      rtn="../../../assets/ico_pending.svg";
    }
    return rtn;
  }
  AddUser()
  {
    this.dialog.afterAllClosed.subscribe(()=>this.fetchdata())
    const dialogRef = this.dialog.open(EmployeeComponent ,{data : {}})
  }
  applyFilter()
  {
    console.log(this.searchkey);
    this.listdata.filter=this.searchkey.trim().toLowerCase();
  }
  

}
