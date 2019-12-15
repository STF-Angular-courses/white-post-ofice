import {Injectable} from '@angular/core';
import {IPackage} from '../models/package.model';
import Package from '../contracts/package';
import {PostDepartmentService} from './post-department.service';


@Injectable()
export class PackageService {
  constructor(public postDepartmentService: PostDepartmentService) {
  }
 packageList: IPackage[] = [
    new Package('1',
      '1',
      'letter',
      'MyLetter',
      'mail',
      'Very important letter!',
      '0.1',
      '0.2',
      '0.01',
      '20',
      this.postDepartmentService[1],
      this.postDepartmentService[0]
    ),
   new Package('2',
     '2',
     'package',
     'MyPackage',
     'archive',
     'Very important package!',
     '0.7',
     '1',
     '20',
     '250',
     this.postDepartmentService[0],
     this.postDepartmentService[1])
  ];

}
