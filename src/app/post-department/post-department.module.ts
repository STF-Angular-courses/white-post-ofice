import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDepartmentComponent} from './post-department/post-department.component';
import {DepartmentsListComponent} from './departments-list/departments-list.component';
import {PostDepartmentService} from './common/services/post-department.service';
import {MatButtonModule, MatCardModule} from '@angular/material';


@NgModule({
  declarations: [
    PostDepartmentComponent,
    DepartmentsListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [PostDepartmentService],
  exports: [
    PostDepartmentComponent,
    DepartmentsListComponent
  ]
})
export class PostDepartmentModule { }
