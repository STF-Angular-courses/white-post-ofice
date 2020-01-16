import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostDepartmentService} from '../common/services/post-department.service';
import PostDepartment from '../common/contracts/post-department.contract';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  @Input() parentID: string;
  postDepartmentList: PostDepartment[];
  constructor(private postDepartmentService: PostDepartmentService) { }

  ngOnInit(): void {
    if (!this.parentID) {
      this.postDepartmentList = this.postDepartmentService.postDepartmentList;
      return;
    }
    if (this.parentID) {
      this.postDepartmentList = this.postDepartmentService.getElementsById(this.parentID);
    }
  }
  updateList(): void {
    if (this.parentID) {
      this.postDepartmentList = this.postDepartmentService.getElementsById(this.parentID);
    }
  }
}
