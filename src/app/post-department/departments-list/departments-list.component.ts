import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from '../common/contracts/post-department.contract';
import {PostDepartmentService} from '../common/services/post-department.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  @Input() parentID: string;
  @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();
  postDepartmentList: PostDepartment[];
  constructor(private postDepartmentService: PostDepartmentService) { }

  ngOnInit(): void {
    if (!this.parentID) {
      this.postDepartmentList = this.postDepartmentService.postDepartmentList;
      return;
    }
    if (this.parentID) {
      this.postDepartmentList = this.postDepartmentService.postDepartmentList.filter( (elem, index) => {
        return elem.parent === this.parentID;
      });
    }
  }
  showDetail(item: PostDepartment): void {
    this.postDepartmentDetail.emit(item);
  }
}
