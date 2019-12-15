import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PostCompany} from '../../../common/contracts/post-company';
import {PostService} from '../../../common/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Output() postCompanyDetail = new EventEmitter<PostCompany>();
  postCompanyList: PostCompany[];
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postCompanyList = this.postService.postCompanyList;
  }
  showDetail(item: PostCompany) {
    this.postCompanyDetail.emit(item);
  }
  add() {
    this.postService.add(
      new PostCompany(
        'C0001',
        'Company',
        'Nova Poshta',
        'Stolychne shose str, 103, Kyiv, Ukraine',
        '111-111-11',
        'Mr X.',
        'assets/nova.png',
        'Is a private Ukrainian postal and courier company ' +
        'that provides express delivery of documents, freight and parcels ' +
        'for individuals and businesses. In 2017, the company delivered over ' +
        '145 million shipments, through the company\'s 2300 branches throughout the country.'
      )
    );
  }
}
