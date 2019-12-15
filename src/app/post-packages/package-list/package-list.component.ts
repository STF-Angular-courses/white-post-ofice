import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Package from '../../../common/contracts/package';
import {PackageService} from '../../../common/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  @Input() clientId: string;
  @Input() departmentId: string;
  @Output() packageDetail = new EventEmitter<Package>();
  packageList: Package[];

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    if ( !this.departmentId && !this.clientId) {
      this.packageList = this.packageService.packageList;
    } else {
      this.packageList = this.packageService.packageList.filter( elem => {
        if (this.departmentId) {
          return elem.destinationPointID === this.departmentId;
        }
        if (this.clientId) {
          return elem.clientId === this.clientId;
        }
      });
    }

  }
  showDetail(item: Package) {
    this.packageDetail.emit(item);
  }
  add() {
    this.packageService.add(
      new Package(
        'P0001',
        'HB0001',
        'box',
        'Package 1',
        'assets/box.jpg',
        'Empty box',
        '0.7',
        '1',
        '5',
        '30',
        'CD0002-00',
        'CD0002-01'),
    );
  }
}
