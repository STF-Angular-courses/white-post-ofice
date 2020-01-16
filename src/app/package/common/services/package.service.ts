import {Injectable} from '@angular/core';
import Package from '../contracts/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packageList: Package[]  = [
    new Package (
      'MyLetter1',
      'assets/letter-ico.jpg',
      'Very important letter for my dog!',
      'PL0001',
      'HB0001',
      'letter',
      '1.23',
      '0.03',
      '0.3',
      '0.026',
      'CD0001-00',
      'CD0001-01',
      'HB0003'
    ),
    new Package (
      'Wrapper 1',
      'assets/wrapper.jpg',
      'Constitution of Ukraine wrapper',
      'PL0001',
      'HB0002',
      'wrapper',
      '1.23',
      '0.03',
      '0.3',
      '0.026',
      'CD0002-01',
      'CD0002-00',
      'HB0001'
    ),
    new Package (
      ' Package Box 2',
      ' assets/box.jpg',
      'Empty box',
      'PL0003',
      'HB0002',
      'box',
      '11.66',
      '0.60',
      '0.3',
      '6.16',
      'CD0002-00',
      'CD0002-01',
      'HB0003'
    ),
  ];
  constructor() { }
  getElemById( id: string ): Package {
    const index = this.packageList.findIndex(element => element.id === id);
    return this.packageList[index];
  }
  add(pack?: Package): void {
    if (!pack) {
      // TODO: TEST FUNCTIONAL, TO DELETE IN FUTURE
      this.packageList.push(
        new Package (
          ' Package Box 3',
          ' assets/box.jpg',
          'Empty box',
          'PL0003',
          'HB0002',
          'box',
          '11.66',
          '0.60',
          '0.3',
          '6.16',
          'CD0002-00',
          'CD0002-01',
          'HB0003'
        ),
      );
      return;
    }
    this.packageList.push(pack);
  }
  remove(pack?: Package): void {
    if (pack) {
      try {
        const index = this.packageList.indexOf(pack);
        this.packageList.splice(index, 1);
        return;
      } catch  {
        console.log('Item not found');
      }
    }
    if (!pack ) {
      try {
        this.packageList.splice(this.packageList.length - 1, 1);
      } catch  {
        console.log('Error');
      }
    }
  }
}
