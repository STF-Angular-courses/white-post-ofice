import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PackageService} from '../../../common/services/package.service';
import Package from '../../../common/contracts/package';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {

  @Output() packageDetail = new EventEmitter<Package>();
  constructor(public packageService: PackageService) { }

  ngOnInit() {
  }

  showDetail(item: Package) {
    this.packageDetail.emit(item);
  }
}
