import {Component, Input} from '@angular/core';
import PostDepartment from '../common/contracts/post-department.contract';


@Component({
  selector: 'app-post-department',
  templateUrl: './post-department.component.html',
  styleUrls: ['./post-department.component.scss']
})
export class PostDepartmentComponent  {
  @Input() department: PostDepartment;
}
