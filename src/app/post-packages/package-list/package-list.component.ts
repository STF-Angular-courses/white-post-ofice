import { Component, OnInit } from '@angular/core';
import Package from '../../../common/contracts/package';
import {PackageService} from '../../../common/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packageList: Package[];
  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageList = this.packageService.
  }

}
