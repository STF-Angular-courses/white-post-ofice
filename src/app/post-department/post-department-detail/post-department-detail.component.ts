import {Component, Input} from '@angular/core';
import PostDepartment from '../../../common/contracts/post-department.contract';

@Component({
  selector: 'app-post-department-detail',
  templateUrl: './post-department-detail.component.html',
  styleUrls: ['./post-department-detail.component.scss']
})
export class PostDepartmentDetailComponent {
  @Input() department: PostDepartment;
}
