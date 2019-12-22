import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { ClientListComponent } from './post-clients/client-list/client-list.component';
import { PackageListComponent } from './post-packages/package-list/package-list.component';
import { PostListComponent } from './post-structs/post-list/post-list.component';
import {PostItemComponent} from './post-structs/post-company/post-item.component';
import {ClientItemComponent} from './post-clients/client-item/client-item.component';
import {PackageItemComponent} from './post-packages/package-item/package-item.component';
import {PostService} from '../common/services/post.service';
import {ClientService} from '../common/services/client.service';
import {PackageService} from '../common/services/package.service';
import { PostCompanyDetailComponent } from './post-company-detail/post-company-detail.component';
import {PostDepartmentService} from '../common/services/post-department.service';
import {PostDepartmentComponent} from './post-structs/post-department/post-department.component';
import {DepartmentsListComponent} from './post-structs/departments-list/departments-list.component';
import {PercentPipe} from '../common/pipes/percent.pipe';
import {PricePipe} from '../common/pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostDepartmentComponent,
    DepartmentsListComponent,
    ClientItemComponent,
    PackageItemComponent,
    ClientListComponent,
    PackageListComponent,
    PostListComponent,
    PostCompanyDetailComponent,
    PercentPipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [PostDepartmentService, PostService, ClientService, PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
