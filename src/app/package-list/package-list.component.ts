import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../common/services/package.service';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.scss']
})
export class PackageListComponent {

  constructor(public packageService: PackageService) { }
}
