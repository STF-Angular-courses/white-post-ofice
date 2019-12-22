import {PostService} from '../common/services/post.service';
import {ClientService} from '../common/services/client.service';
import {PostCompany} from '../common/contracts/post-company.contract';
import {PackageService} from '../common/services/package.service';
import {Component, OnInit} from '@angular/core';
import PostDepartment from '../common/contracts/post-department.contract';
import Client from '../common/contracts/client.contract';
import Package from '../common/contracts/package';
import {PostDepartmentService} from '../common/services/post-department.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  postCompanyList: PostCompany[];
  postDepartmentList: PostDepartment[];
  clientsList: Client[];
  packageList: Package[];
  showPostList = true;
  showClientList = false;
  showPackageList = false;
  showPostOfficesList = false;
  itemToDetail: PostCompany | PostDepartment | Client | Package ;
  constructor(
    private postService: PostService,
    private postOfficeService: PostDepartmentService,
    private clientService: ClientService,
    private packageService: PackageService
  ) { }
  ngOnInit(): void {
    this.postCompanyList = this.postService.postCompanyList;
    this.postDepartmentList = this.postOfficeService.postDepartmentList;
    this.clientsList = this.clientService.clientList;
    this.packageList = this.packageService.packageList;
  }
  postCompanyDetail(event: PostCompany ) {
    this.hideAllList();
    this.itemToDetail = event;
  }
  hideAllList() {
    this.showPostList = false;
    this.showClientList = false;
    this.showPackageList = false;
    this.showPostOfficesList = false;
    this.itemToDetail = undefined;
  }
}



