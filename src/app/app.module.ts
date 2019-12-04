import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PostDepartmentItemComponent } from './post-department-item/post-department-item.component';
import { PostDepartmentListComponent } from './post-department-list/post-department-list.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { PackageListComponent } from './package-list/package-list.component';

@NgModule({
  declarations: [AppComponent, PostDepartmentItemComponent, PostDepartmentListComponent, PackageItemComponent, PackageListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
