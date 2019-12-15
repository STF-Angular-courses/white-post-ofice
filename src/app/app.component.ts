import {Component, OnInit} from '@angular/core';
import {PostService} from '../common/services/post.service';
import {PostDepartmentService} from '../common/services/post-department.service';
import {ClientService} from '../common/services/client.service';
import {PostCompany} from '../common/contracts/post-company';
import Person from '../common/contracts/person';
import PostDepartment from '../common/contracts/post-department';
import Package from '../common/contracts/package';
import {IClient} from '../common/models/client.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showPostList = true;
  showClientList = false;
  showPackList = false;
  selectedItem = false;
  viewItem: any;
  postCompanyList: PostCompany[];
  postDepartmentList: PostDepartment[];
  clientsList: IClient[];

  constructor(
    private postService: PostService,
    private postDepartmentService: PostDepartmentService,
    private clientService: ClientService
  ) { }
  ngOnInit(): void {
    this.postCompanyList = this.postService.postCompanyList;
    this.postDepartmentList = this.postDepartmentService.postDepartmentList;
    this.clientsList = this.clientService.clientList;
  }
  showList(event: Event) {
    if (event.target instanceof HTMLElement) {
      const target = event.target as HTMLElement;
      switch (target.id) {
        case 'post-btn':
          this.showPostList = true;
          this.showClientList = false;
          this.showPackList = false;
          this.viewItem = undefined;
          break;
        case 'client-btn':
          this.showClientList = true;
          this.showPackList = false;
          this.showPostList = false;
          this.viewItem = undefined;
          break;
        case 'pack-btn':
          this.showPackList = true;
          this.showClientList = false;
          this.showPostList = false;
          this.viewItem = undefined;
          break;
        default: break;
      }
    } else {
      if (event instanceof PostCompany) {
        this.showPostList = true;
        this.showClientList = false;
        this.showPackList = false;
        this.viewItem = undefined;
      } else if (event instanceof Package) {
        this.showPostList = false;
        this.showClientList = false;
        this.showPackList = true;
        this.viewItem = undefined;
      } else if (event instanceof Person) {
        this.showPostList = false;
        this.showClientList = true;
        this.showPackList = false;
        this.viewItem = undefined;
      } else {
        this.showPostList = true;
        this.showClientList = false;
        this.showPackList = false;
        this.viewItem = undefined;
      }
    }
  }
  showItemDetail(item: any) {
    if (item instanceof PostCompany) {
      this.viewItem = item as PostCompany;
    } else if (item instanceof Person) {
      this.viewItem = item as Person;
    } else if (item instanceof PostDepartment) {
      this.viewItem = item as PostDepartment;
    } else {
      this.viewItem = item as Package;
    }
    this.showPostList = false;
    this.showClientList = false;
    this.showPackList = false;
  }
}



