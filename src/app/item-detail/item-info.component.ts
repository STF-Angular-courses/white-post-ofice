import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import PostDepartment from "../../common/contracts/post-department";
import Person from "../../common/contracts/person";
import {PostCompany} from "../../common/contracts/post-company";
import Package from "../../common/contracts/package";


@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.scss']
})
export class ItemInfoComponent implements OnInit {
  @Input() item: any;
  @Output() goBack = new EventEmitter<any>();
  @Output() postDepartmentDetail = new EventEmitter<PostDepartment>();

  // @Output() goBack = new EventEmitter<Package | Person | PostCompany>();
  constructor() { }

  ngOnInit() {}
  isClientPerson(): boolean {
    this.item = this.item as Person;
    return this.item instanceof Person;
  }
  isPostCompany(): boolean {
    this.item = this.item as PostCompany;
    return this.item instanceof PostCompany;
  }
  isPackage(): boolean {
    this.item = this.item as Package;
    return this.item instanceof Package;
  }
  isPostDepartment(): boolean {
    this.item = this.item as PostDepartment;
    return this.item instanceof PostDepartment;
  }
  back(): void {
    this.goBack.emit(this.item);
  }
  viewDetail(event: PostDepartment): void {
    this.postDepartmentDetail.emit(event);
  }
}
