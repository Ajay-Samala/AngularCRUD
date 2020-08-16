import {PipeTransform, Pipe} from '@angular/core';
import { Employee } from 'src/app/service/employee.model';


@Pipe({
    name :'EmployeeFilter'    
})
export class EmployeeFilterPipe implements PipeTransform
{
transform(employees : Employee[],filter :string) : Employee[]
{
    filter =filter ? filter.toLocaleLowerCase() : null;

 return filter ? employees.filter((emp : Employee)=> 
 emp.Name !=null && emp.Name.toLocaleLowerCase().indexOf(filter)!=-1 
 || emp.Email !=null && emp.Email.toLocaleLowerCase().indexOf(filter)!=-1 
 || emp.RoleType !=null && emp.RoleType.toLocaleLowerCase().indexOf(filter)!=-1 
 || emp.Status !=null && emp.Status.toLocaleLowerCase().indexOf(filter)!=-1 ) : employees
}
}