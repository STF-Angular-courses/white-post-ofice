import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // postCompanyList: PostCompany[];
  // postDepartmentList: PostDepartment[];
  // clientsList: Client[];
  // packageList: Package[];
  // showPostList = true;
  // showClientList = false;
  // showPackageList = false;
  // showPostOfficesList = false;
  // itemToDetail: PostCompany | PostDepartment | Client | Package ;
  constructor(
    // private postService: PostService,
    // private postOfficeService: PostDepartmentService,
    // private clientService: ClientService,
    // private packageService: PackageService
  ) { }
  ngOnInit(): void {
    // this.postCompanyList = this.postService.postCompanyList;
    // this.postDepartmentList = this.postOfficeService.postDepartmentList;
    // this.clientsList = this.clientService.clientList;
    // this.packageList = this.packageService.packageList;
  }
  // postCompanyDetail(event: PostCompany ) {
    // this.hideAllList();
    // this.itemToDetail = event;
  // }
  // hideAllList() {
    // this.showPostList = false;
    // this.showClientList = false;
    // this.showPackageList = false;
    // this.showPostOfficesList = false;
    // this.itemToDetail = undefined;
  // }
}



