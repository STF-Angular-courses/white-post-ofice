import {Component, OnInit} from '@angular/core';
import {PostCompany} from './post-company/common/contracts/post-company.contract';
import PostDepartment from './post-department/common/contracts/post-department.contract';
import Client from './client/common/contracts/client.contract';
import Package from './package/common/contracts/package';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showPostList = true;
  showClientList = false;
  showPackageList = false;
  showPostOfficesList = false;
  itemToDetail: PostCompany | PostDepartment | Client | Package ;
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



