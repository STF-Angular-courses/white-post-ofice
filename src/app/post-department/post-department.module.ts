import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDepartmentService} from '../../common/services/post-department.service';
import {PostDepartmentComponent} from './post-department/post-department.component';
import {DepartmentsListComponent} from './departments-list/departments-list.component';



@NgModule({
  declarations: [
    PostDepartmentComponent,
    DepartmentsListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [PostDepartmentService]
})
export class PostDepartmentModule { }
