import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from '../../common/contracts/post-department';
import Person from '../../common/contracts/person';
import {PostCompany} from '../../common/contracts/post-company';
import Package from '../../common/contracts/package';


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  @Input() item: any;
  @Output() showList = new EventEmitter<any>();
  @Output() showDetail = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {}
  isClientPerson(): boolean {
    if (this.item instanceof Person) {
      this.item = this.item as Person;
      return true;
    } else {
      return false;
    }
  }
  isPostCompany(): boolean {
    if (this.item instanceof PostCompany) {
      this.item = this.item as PostCompany;
      return true;
    } else {
      return false;
    }
  }
  isPackage(): boolean {
    if (this.item instanceof Package) {
      this.item = this.item as Package;
      return true;
    } else {
      return false;
    }
  }
  isPostDepartment(): boolean {
    if (this.item instanceof PostDepartment) {
      this.item = this.item as PostDepartment;
      return true;
    } else {
      return false;
    }
  }

  viewDetail(event: any): void {
    this.showDetail.emit(event);
  }
}
