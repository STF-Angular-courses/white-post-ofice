import {Component, Input, OnInit} from '@angular/core';
import PostDepartment from '../common/contracts/post-department.contract';
import {ActivatedRoute, Router} from '@angular/router';
import {PostDepartmentService} from '../common/services/post-department.service';

@Component({
  selector: 'app-post-department-detail',
  templateUrl: './post-department-detail.component.html',
  styleUrls: ['./post-department-detail.component.scss']
})
export class PostDepartmentDetailComponent implements OnInit {
  department: PostDepartment;
  constructor(private departmentService: PostDepartmentService, private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      const id = param.get('id');
      this.department = this.departmentService.getElemById(id);
    });
  }
}
