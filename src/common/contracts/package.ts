import {IPackage} from '../models/package.model';
import {ILogger} from '../interfaces/logger-interface';
import PostDepartment from './post-department';

export default class Package implements IPackage, ILogger {
  constructor(
    public id: string,
    public clientId: string,
    public type: string,
    public name: string,
    public screen: string,
    public description: string,
    public height: string,
    public width: string,
    public weight: string,
    public price: string,
    public startingPointID: string,
    public destinationPointID: string,
  ) { }
  logData() {
    console.log(
      '\nPackage: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Client ID: ' + this.clientId + '\n' +
      'Type: ' + this.type + '\n' +
      'Name: ' + this.name + '\n' +
      'Description: ' + this.description + '\n' +
      'Price: ' + this.price + '\n' +
      'Weight: ' + this.weight + '\n' +
      'Height: ' + this.height + '\n' +
      'Width: ' + this.width + '\n' +
      'Starting Point ID: ' + this.startingPointID + '\n',
      'Destination Point ID: ' + this.destinationPointID + '\n',
      // (this.startingPoint ? ('Sent from: ' + this.startingPoint.name +  '\n') : '') +
      // (this.destinationPoint ? ('Received: ' + this.destinationPoint.name +  '\n') : '')
    );
  }
}
