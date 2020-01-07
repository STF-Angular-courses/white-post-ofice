import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PackageService} from '../../../common/services/package.service';
import Package from '../../../common/contracts/package';
import {PackageModel} from '../../../common/models/package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {
  packageList: Package[] | PackageModel[];
  @Output() packageDetail = new EventEmitter<Package | PackageModel>();
  constructor(private packageService: PackageService) {}
  showDetail(item: Package | PackageModel) {
    this.packageDetail.emit(item);
  }
}
