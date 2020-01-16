import {Component, OnInit} from '@angular/core';
import Package from '../common/contracts/package';
import {PackageModel} from '../common/models/package.model';
import {PackageService} from '../common/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent implements OnInit {
  packageList: Package[] | PackageModel[];

  constructor(private packageService: PackageService) {}
  ngOnInit(): void {
    this.packageList = this.packageService.packageList;
  }
}
