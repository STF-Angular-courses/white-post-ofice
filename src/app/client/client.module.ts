import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientListComponent} from './client-list/client-list.component';
import {ClientItemComponent} from './client-item/client-item.component';



@NgModule({
  declarations: [
    ClientListComponent,
    ClientItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientListComponent,
    ClientItemComponent
  ]
})
export class ClientModule { }
