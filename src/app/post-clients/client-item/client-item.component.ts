import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Person from '../../shared/contracts/person';
import {PostCompany} from '../../shared/contracts/post-company';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.scss']
})
export class ClientItemComponent implements OnInit {
  @Input() clientItem: Person;
  @Output() clientDetail = new EventEmitter<Person>();

  constructor() { }

  ngOnInit() {
  }
  viewMore(): void {
    this.clientDetail.emit(this.clientItem);
  }
}
