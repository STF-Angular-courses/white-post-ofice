import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../common/models/post-company';
import Package from '../../common/models/package';
import { IPackage } from '../../common/models/interfaces/package-interface';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent implements OnInit {
  @Input() package: IPackage;
  @Output() packageDetail = new EventEmitter<Package>();

  constructor() { }

  ngOnInit() {
  }
  viewMore(): void {
    this.packageDetail.emit(this.package);
  }
}
