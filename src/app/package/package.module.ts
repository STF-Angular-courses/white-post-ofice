import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {PackageListComponent} from './package-list/package-list.component';
import {PackageItemComponent} from './package-item/package-item.component';
import {PercentPipe} from './common/pipes/percent.pipe';
import {PricePipe} from './common/pipes/price.pipe';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";



@NgModule({
  declarations: [
    PackageItemComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    PackageItemComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe,
  ]
})
export class PackageModule { }
