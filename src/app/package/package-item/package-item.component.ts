import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CurrencyEnum} from '../common/custom-types/currency-enum';
import Package from '../common/contracts/package';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent {
  @Input() package: Package;
  @Output() packageDetail = new EventEmitter<Package>();
  currency = CurrencyEnum;
  viewMore(): void {
    this.packageDetail.emit(this.package);
  }
}
