import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 data : Employee;
 list : Employee[];
 
  
 private url= 'http://localhost:44330/api/Employee';
  constructor(private http : HttpClient) 
  {

  }

  PostData(data : Employee)
  {
    console.log(data);
return this.http.post(this.url,data);
  }

  GetData() : Observable<Employee[]>
  {
    
   return this.http.get<Employee[]>(this.url)
    
  }
  UpdateData(emp : Employee)
  {
    return this.http.put(this.url+'/'+emp.EmployeeID,emp)
  }

  DeleteData(emp : Employee)
  {console.log(emp);
 return this.http.delete(this.url+'/'+emp.EmployeeID)
  }
  
}
