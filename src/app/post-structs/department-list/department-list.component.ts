import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from '../../../common/contracts/post-department';
import {PostDepartmentService} from '../../../common/services/post-department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  @Input() parentID: string;
  @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();
  postDepartmentList: PostDepartment[];
  constructor(private postDepartmentService: PostDepartmentService) { }

  ngOnInit() {
    this.postDepartmentList = this.postDepartmentService.postDepartmentList.filter( (elem, index) => {
      return elem.parent === this.parentID;
    });
  }
  showDetail(item: PostDepartment) {
    this.postDepartmentDetail.emit(item);
  }
}
