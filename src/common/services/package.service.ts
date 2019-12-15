import { Injectable } from '@angular/core';
import Package from '../contracts/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  packageList  = [
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
      'Box XY',
      '',
      'Some description',
      '0.49',
      '0.26',
      '1.8',
      '3.56',
      '',
      ''),
  ];
  constructor() { }
}
// {
//   client: clientItemsData[1],
//     destinationPoint: postItemsData[0][1],
//   startingPoint: postItemsData[1][0],
//   type: 'letter',
//   weight: '0.1',
//   height: '0,15',
//   width: '0.30',
//   price: '30',
//   description: 'Very important letter for my dog!',
//   name: 'MyLetter1',
//   screen: 'email'
// },
// {
//   client: clientItemsData[1],
//     destinationPoint: postItemsData[1][0],
//   startingPoint: postItemsData[0][1],
//   type: 'package',
//   weight: '5',
//   height: '0.7',
//   width: '1',
//   price: '150',
//   description: 'Empty box',
//   name: 'Package 1',
//   screen: 'local_mall'
// }
