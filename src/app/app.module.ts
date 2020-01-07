import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {PostCompanyModule} from './post-company/post-company.module';
import {PostDepartmentModule} from './post-department/post-department.module';
import {ClientItemComponent} from './post-clients/client-item/client-item.component';
import {ClientListComponent} from './post-clients/client-list/client-list.component';
import {PackageItemComponent} from './post-packages/package-item/package-item.component';
import {PackageListComponent} from './post-packages/package-list/package-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientItemComponent,
    ClientListComponent,
    PackageItemComponent,
    PackageListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    PostCompanyModule,
    PostDepartmentModule
  ],
  providers: [],
  exports: [
    PackageListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
