import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import {PostService} from './common/services/post.service';
import {PostItemComponent} from './post-company/post-item.component';
import {PostCompanyDetailComponent} from './post-company-detail/post-company-detail.component';
import {PostListComponent} from './post-list/post-list.component';

@NgModule({
  declarations: [
    PostItemComponent,
    PostCompanyDetailComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [PostService],
  exports: [
    PostItemComponent,
    PostCompanyDetailComponent,
    PostListComponent
  ]
})
export class PostCompanyModule { }
