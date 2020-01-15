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
  itemToDetail: PostCompany | PostDepartment | Client | Package ;
}



