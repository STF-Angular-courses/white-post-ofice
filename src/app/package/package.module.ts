import { NgModule } from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';
import {PackageListComponent} from './package-list/package-list.component';
import {PackageItemComponent} from './package-item/package-item.component';
import {PercentPipe} from './common/pipes/percent.pipe';
import {PricePipe} from './common/pipes/price.pipe';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { PackageDetailComponent } from './package-detail/package-detail.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    PackageItemComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe,
    PackageDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    PackageItemComponent,
    PackageListComponent,
    PackageDetailComponent,
    PercentPipe,
    PricePipe,
  ]
})
export class PackageModule { }
