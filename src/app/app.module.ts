import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {PostCompanyModule} from './post-company/post-company.module';
import {PostDepartmentModule} from './post-department/post-department.module';
import {ClientModule} from "./client/client.module";
import {PackageModule} from "./package/package.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    PostCompanyModule,
    PostDepartmentModule,
    ClientModule,
    PackageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
