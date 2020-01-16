import {Component, OnInit} from '@angular/core';
import {PostCompany} from '../common/contracts/post-company.contract';
import {PostDepartmentService} from '../../post-department/common/services/post-department.service';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../common/services/post.service';

@Component({
  selector: 'app-post-company-detail',
  templateUrl: './post-company-detail.component.html',
  styleUrls: ['./post-company-detail.component.scss']
})
export class PostCompanyDetailComponent implements OnInit {
   postCompany: PostCompany;

   constructor(private postCompanyService: PostService,
               private postDepartmentService: PostDepartmentService,
               private activatedRoute: ActivatedRoute) {}
   ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(param => {
        const id = param.get('id');
        this.postCompany = this.postCompanyService.getElemById(id);
      });
   }
}

