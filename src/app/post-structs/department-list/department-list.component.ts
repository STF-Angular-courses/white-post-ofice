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
  @Input() showAll = false;
  @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();
  postDepartmentList: PostDepartment[];
  constructor(private postDepartmentService: PostDepartmentService) { }

  ngOnInit(): void {
    if (this.showAll) {
      this.postDepartmentList = this.postDepartmentService.postDepartmentList;
    }  else  {
      this.postDepartmentList = this.postDepartmentService.postDepartmentList.filter( (elem, index) => {
        return elem.parent === this.parentID;
      });
    }
  }
  showDetail(item: PostDepartment): void {
    this.postDepartmentDetail.emit(item);
  }
  add(): void {
    this.postDepartmentService.add(
      new PostDepartment(
        'CD0001-00',
        'Departmant',
        'Post Department in Khmelnytskyi',
        'Svoboda str, 23, Khmelnytskyi, Ukraine',
        '111-111-11-11',
        'assets/department.jpg',
        'Some description',
        'C0001',
        []
      )
    );
  }
}
