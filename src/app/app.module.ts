import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule} from '@angular/material';
import { ClientListComponent } from './post-clients/client-list/client-list.component';
import { PackageListComponent } from './post-packages/package-list/package-list.component';
import {ClientItemComponent} from './post-clients/client-item/client-item.component';
import {PackageItemComponent} from './post-packages/package-item/package-item.component';
import {ClientService} from '../common/services/client.service';
import {PackageService} from '../common/services/package.service';
import {PercentPipe} from '../common/pipes/percent.pipe';
import {PricePipe} from '../common/pipes/price.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClientItemComponent,
    PackageItemComponent,
    ClientListComponent,
    PackageListComponent,
    PercentPipe,
    PricePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  providers: [ClientService, PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
