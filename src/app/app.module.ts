import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { ClientListComponent } from './post-clients/client-list/client-list.component';
import { PackageListComponent } from './post-packages/package-list/package-list.component';
import { PostListComponent } from './post-structs/post-list/post-list.component';
import {PostItemComponent} from './post-structs/post-company/post-item.component';
import {PostDepartmentComponent} from './post-structs/post-department/post-department.component';
import {ClientItemComponent} from './post-clients/client-item/client-item.component';
import {PackageItemComponent} from './post-packages/package-item/package-item.component';
import {ItemInfoComponent} from './item-detail/item-info.component';
import {PackageService} from '../common/services/package.service';
import {ClientService} from '../common/services/client.service';
import {PostService} from '../common/services/post.service';
import {PostDepartmentService} from '../common/services/post-department.service';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostDepartmentComponent,
    ClientItemComponent,
    PackageItemComponent,
    ItemInfoComponent,
    ClientListComponent,
    PackageListComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [PackageService, ClientService, PostService, PostDepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
