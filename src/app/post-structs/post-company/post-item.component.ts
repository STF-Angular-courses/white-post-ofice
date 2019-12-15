import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../../common/contracts/post-company';
import PostDepartment from '../../../common/contracts/post-department';
import {PostDepartmentService} from '../../../common/services/post-department.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() postCompany: PostCompany;
  @Input() showDepartmentList = false;
  @Output() postCompanyDetail = new EventEmitter<PostCompany>();
  // postDepartments: PostDepartment[];
  constructor(private postDepartmentService: PostDepartmentService) { }

  ngOnInit() {
    // this.postDepartments = this.postDepartmentService.postDepartmentList.filter( (elem, index) => {
    //   return elem.parent === this.postCompany.id;
    // });
  }
  viewMore(): void {
    this.postCompanyDetail.emit(this.postCompany);
  }
}
