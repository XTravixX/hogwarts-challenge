import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HouseComponent } from "./component/house/house.component";
import { StudentsComponent } from "./component/students/students.component";
import { StaffComponent } from "./component/staff/staff.component";
import { StudentFormComponent } from './component/student-form/student-form.component';

const routes: Routes = [
  { path: 'houses', component: HouseComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'staff', component: StaffComponent },
  { path: 'request', component: StudentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
