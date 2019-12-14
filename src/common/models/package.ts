import {ILogger} from './interfaces/logger-interface';
import {IOrganisation} from './interfaces/organisation-interface';
import {IPerson} from './interfaces/person-interface';
import {IPackage} from './interfaces/package-interface';
import {IPostDepartment} from './interfaces/post-department-interface';

export default class Package implements IPackage {
  constructor(public client: IOrganisation | IPerson,
              public destinationPoint: IPostDepartment,
              public startingPoint: IPostDepartment,
              public name: string,
              public type: string,
              public price: string,
              public height: string,
              public width: string,
              public weight: string,
              public screen: string,
              public description: string) { }


  /*logData() {
    console.log(`------ Package ------
        Client: ${this.client}
        Starting point: ${this.startingPoint}
        Destination point: ${this.destinationPoint}
        Type: ${this.type}
        Price: ${this.price}
        Height: ${this.height}
        Width: ${this.width}
        Wight: ${this.weight}`);
  }*/
}
