import { Injectable } from '@angular/core';
import Package from '../contracts/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packageList: Package[]  = [
    new Package(
      'PL0001',
      '',
      'letter',
      'Letter X',
      '',
      'Very important letter for my dog!',
      '0.15',
      '0.1',
      '0.05',
      '0.66',
      '',
      ''
    ),
    new Package(
      'PB0001',
      '',
      'wrapper',
      'Wrapper Y',
      '',
      'Some description',
      '1.15',
      '0.3',
      '0.15',
      '1.2',
      '',
      ''
    ),
    new Package(
      'P0001',
      '',
      'box',
      'Package 1',
      '',
      'Empty box',
      '0.7',
      '1',
      '5',
      '30',
      '',
      ''),
  ];
  constructor() { }
  add(pack: Package): void {
    this.packageList.push(pack);
  }
  remove(pack: Package): void {
    try {
      const index = this.packageList.indexOf(pack);
      this.packageList.splice(index, 1);
    } catch  {
      console.log('Item not found');
    }
  }
}
