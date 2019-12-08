import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostItemComponent } from './post-item/post-item.component';
import { PostDepartmentComponent } from './post-department/post-department.component';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    PostDepartmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
