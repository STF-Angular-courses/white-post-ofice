import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostCompanyModule} from './post-company/post-company.module';
import {PostDepartmentModule} from './post-department/post-department.module';
import {PostItemComponent} from './post-company/post-company/post-item.component';
import {PostCompanyDetailComponent} from './post-company/post-company-detail/post-company-detail.component';
import {PostListComponent} from './post-company/post-list/post-list.component';
import {PostDepartmentComponent} from './post-department/post-department/post-department.component';
import {DepartmentsListComponent} from './post-department/departments-list/departments-list.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostCompanyModule,
    PostDepartmentModule
  ],
  exports: [
    PostItemComponent,
    PostCompanyDetailComponent,
    PostListComponent,
    PostDepartmentComponent,
    DepartmentsListComponent,
  ]
})
export class PostModule { }
