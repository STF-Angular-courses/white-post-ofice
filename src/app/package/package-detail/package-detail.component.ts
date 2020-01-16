import { Component, OnInit } from '@angular/core';
import Package from "../common/contracts/package";
import {PackageService} from "../common/services/package.service";
import {ActivatedRoute} from "@angular/router";
import {CurrencyEnum} from "../common/custom-types/currency-enum";

@Component({
  selector: 'app-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss']
})
export class PackageDetailComponent implements OnInit {
  package: Package;
  currency = CurrencyEnum;
  constructor(private packageService: PackageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      this.package = this.packageService.getElemById(id);
    });
  }

}
