import {ILogger} from '../interfaces/logger-interface';
import {PackageModel} from '../models/package.model';

export default class Package implements PackageModel, ILogger {
  constructor(
    public name: string,
    public screen: string,
    public description: string,
    public id: string,
    public clientId: string,
    public type: string,
    public price: string,
    public height: string,
    public width: string,
    public weight: string,
    public startingPointID: string,
    public destinationPointID: string,
    public receiver: string
  ) { }
  logData() {
    console.log(`------ Package ------
      Package Name: ${this.name};
      ID: ${this.id};
      Client ID: ${this.clientId};
      Type:  ${this.type};
      Name: ${this.name};
      Price: ${this.price};
      Weight: ${this.weight};
      Height: ${this.height};
      Width: ${this.width};
      Starting Point ID: ${this.startingPointID};
      Destination Point ID: ${this.destinationPointID};
      Receiver: ${this.receiver};`
    );
  }
}
