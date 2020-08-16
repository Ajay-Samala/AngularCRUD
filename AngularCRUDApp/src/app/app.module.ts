import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { EmployeeComponent } from './master/employee/employee.component';
import { EmployeelistComponent } from './master/employeelist/employeelist.component';
import { EmployeeService } from './service/employee.service';
import {EmployeeFilterPipe} from './master/employeelist/employee-filter.pipe'
import { MatToolbarModule} from '@angular/material/toolbar'
import {MatCardModule } from '@angular/material/card'
import {MatTableModule} from '@angular/material/table'
import {MatSortModule} from '@angular/material/sort'
import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {RouterModule, Routes} from '@angular/router'

const routes : Routes =
[
  {path:'employeelist',component:EmployeelistComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    EmployeeComponent,
    EmployeelistComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  entryComponents :[EmployeeComponent]
})
export class AppModule { }
