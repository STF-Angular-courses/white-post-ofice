import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostDepartmentComponent} from './post-department/post-department.component';
import {DepartmentsListComponent} from './departments-list/departments-list.component';
import {PostDepartmentService} from './common/services/post-department.service';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {PostDepartmentDetailComponent} from './post-department-detail/post-department-detail.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    PostDepartmentComponent,
    DepartmentsListComponent,
    PostDepartmentDetailComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  providers: [PostDepartmentService],
  exports: [
    PostDepartmentComponent,
    DepartmentsListComponent,
    PostDepartmentDetailComponent
  ]
})
export class PostDepartmentModule { }
