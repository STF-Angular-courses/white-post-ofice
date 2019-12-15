import { Injectable } from '@angular/core';
import Package from '../models/package';
import { clientItemsData, postItemsData } from '../models/DATA';
import { IPackage } from '../models/interfaces/package-interface';


@Injectable()
export class PackageService {
  constructor() {
  }
  public packages: IPackage[] = [
    {
      client: clientItemsData[1],
      destinationPoint: postItemsData[0][1],
      startingPoint: postItemsData[1][0],
      type: 'letter',
      weight: '0.1',
      height: '0,15',
      width: '0.30',
      price: '30',
      description: 'Very important letter for my dog!',
      name: 'MyLetter1',
      screen: '--some screen--'
    },
    {
      client: clientItemsData[1],
      destinationPoint: postItemsData[1][0],
      startingPoint: postItemsData[0][1],
      type: 'package',
      weight: '5',
      height: '0.7',
      width: '1',
      price: '150',
      description: 'Empty box',
      name: 'Package 1',
      screen: '--some screen--'
    }
  ];
}


