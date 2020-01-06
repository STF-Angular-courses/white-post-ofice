import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from '../../../common/contracts/post-department.contract';

@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.scss']
})
export class PostDepartmentComponent  {
  @Input() department: PostDepartment;
  @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();

  viewMore(): void {
    this.postDepartmentDetail.emit(this.department);
  }
}
