import {Component, Input, OnInit} from '@angular/core';
import Person from '../../shared/models/person';
import {PostCompany} from '../../shared/models/post-company';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  @Input() clientItem: Person;
  constructor() { }

  ngOnInit() {
  }
  viewMore(postItem: Person): void {

  }
}
