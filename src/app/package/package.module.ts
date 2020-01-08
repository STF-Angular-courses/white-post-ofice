import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {PackageListComponent} from './package-list/package-list.component';
import {PackageItemComponent} from './package-item/package-item.component';
import {PercentPipe} from './common/pipes/percent.pipe';
import {PricePipe} from './common/pipes/price.pipe';



@NgModule({
  declarations: [
    PackageItemComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PackageItemComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe,
  ]
})
export class PackageModule { }
