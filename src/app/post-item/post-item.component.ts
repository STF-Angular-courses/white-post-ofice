import {Component, Input, OnInit} from '@angular/core';
import {PostCompany} from '../../shared/models/post-company';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() postItem: PostCompany;

  constructor() { }

  ngOnInit() {
  }

}
