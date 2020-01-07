import ClientModel from '../models/client.model';
import {ILogger} from '../interfaces/logger-interface';
import Package from './package';
import {PackageModel} from '../models/package.model';

export default class Client implements ClientModel, ILogger {
  constructor(
    public id: string,
    public category: string,
    public name: string,
    public address: string,
    public telephone: string,
    public discount: number | boolean,
    public screen: string,
    public description: string,
    public items?: Package[] | PackageModel[] | string[],
    public sent?: Package[] | PackageModel[] | string[],
    public received?: Package[] | PackageModel[] | string[],
  ) {}
  logData(): void {
    console.log(`
      Person client: ${this.name}
      ID: ${this.id}
      Category: ${this.category}
      Discount: ${this.discount}
      Address: ${this.address}
      Tel: ${this.telephone}
      Description: ${this.description}
      Packages Count: ${this.items.length}
      ${this.sent.length > 0 ? 'Sent Packages: ' + this.sent.length : 'none'}
      ${this.received.length > 0 ? 'Received: ' + this.received.length : 'none'}
    `);
  }
}
