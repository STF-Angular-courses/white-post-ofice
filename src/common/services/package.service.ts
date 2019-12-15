import { Injectable } from '@angular/core';
import Package from '../contracts/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packageList: Package[]  = [
    new Package(
      'PL0001',
      'HB0001',
      'letter',
      'MyLetter1',
      'assets/letter-ico.jpg',
      'Very important letter for my dog!',
      '0.15',
      '0.1',
      '0.05',
      '0.66',
      'CD0001-00',
      'CD0001-01'
    ),
    new Package(
      'PB0001',
      'HB0001',
      'wrapper',
      'Package 1',
      'assets/wrapper.jpg',
      'Some description',
      '1.15',
      '0.3',
      '0.15',
      '1.2',
      'CD0001-01',
      'CD0002-00'
    ),
    new Package(
      'P0001',
      'HB0001',
      'box',
      'Package 2',
      'assets/box.jpg',
      'Empty box',
      '0.7',
      '1',
      '5',
      '30',
      'CD0002-00',
      'CD0002-01'),
  ];
  constructor() { }
  add(pack: Package): void {
    this.packageList.push(pack);
  }
  remove(pack?: Package): void {
    if (pack) {
      try {
        const index = this.packageList.indexOf(pack);
        this.packageList.splice(index, 1);
      } catch  {
        console.log('Item not found');
      }
    } else {
      try {
        this.packageList.splice(this.packageList.length - 1, 1);
      } catch  {
        console.log('Error');
      }
    }
  }
}
