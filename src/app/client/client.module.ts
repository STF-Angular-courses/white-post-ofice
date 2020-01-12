import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientItemComponent} from './client-item/client-item.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    ClientListComponent,
    ClientItemComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    ClientListComponent,
    ClientItemComponent
  ]
})
export class ClientModule { }
