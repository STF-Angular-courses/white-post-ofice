import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostService} from '../common/services/post.service';
import {PostCompany} from '../common/contracts/post-company.contract';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postCompanyList: PostCompany[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postCompanyList = this.postService.postCompanyList;
  }

}
