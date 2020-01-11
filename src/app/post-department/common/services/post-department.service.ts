import {Injectable} from '@angular/core';
import PostDepartment from '../contracts/post-department.contract';

@Injectable({
  providedIn: 'root'
})
export class PostDepartmentService {
  postDepartmentList = [
    new PostDepartment(
      'CD0001-00',
      'Departmant',
      'Post Department in Khmelnytskyi',
      'Svoboda str, 23, Khmelnytskyi, Ukraine',
      '111-111-11-11',
      'assets/department.jpg',
      'Some description',
      'C0001',
      '',
      []
    ),
    new PostDepartment(
      'CD0001-01',
      'Departmant',
      'Post Department in Lviv',
      'Shevchenko str, 6, Lviv, Ukraine',
      '111-111-11-22',
      'assets/department.jpg',
      'Some description',
      'C0001',
      '',
      []
    ),
    new PostDepartment(
      'CD0002-00',
      'Departmant',
      'Ukr Post Department in Khmelnytskyi',
      'Zarichna str, 11/2, Khmelnytskyi, Ukraine',
      '222-222-22-11',
      'assets/department.jpg',
      'Some description',
      'C0002',
      '',
      []
    ),
    new PostDepartment(
      'CD0002-01',
      'Departmant',
      'Ukr Post Department in Poltava',
      'Peremogy str, 16, Poltava, Ukraine',
      '222-222-222-22',
      'assets/department.jpg',
      'Some description',
      'C0002',
      '',
      []
    ),
  ];
  constructor() { }
  add(department?: PostDepartment): void {
    if (!department) {
      // TODO: TEST DATA. REMOVE IN FUTURE.
      this.postDepartmentList.push(new PostDepartment(
        'CD0001-00',
        'Departmant',
        'Post Department in Khmelnytskyi',
        'Svoboda str, 23, Khmelnytskyi, Ukraine',
        '111-111-11-11',
        'assets/department.jpg',
        'Some description',
        'C0001',
        '',
        [])
      );
      return;
    }
    this.postDepartmentList.push(department);
  }
  remove(department?: PostDepartment): void {
    if (department) {
      try {
        const index = this.postDepartmentList.indexOf(department);
        this.postDepartmentList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!department) {
      try {
        this.postDepartmentList.splice(this.postDepartmentList.length - 1, 1);
      } catch  {
        console.log('Error');
      }
    }
  }
}

