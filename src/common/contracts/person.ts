import {IPerson} from '../models/person.model';
import {IClient} from '../models/client.model';
import {ILogger} from '../interfaces/logger-interface';
import {IPackage} from '../models/package.model';

export default class Person implements IPerson, IClient, ILogger {
  constructor(
    public name: string,
    public id: string,
    public age: number,
    public passport: string,
    public category: string,
    public address: string,
    public telephone: string,
    public discount: number | boolean,
    public screen: string,
    public description: string,
    public items: IPackage[] = [],
    public sent: IPackage[] = [],
    public received: IPackage[] = []
  ) {}
  logData() {
    console.log(
      '\nPerson client: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Age: ' + this.age + '\n' +
      'Category: ' + this.category + '\n' +
      'Discount: ' + this.discount + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Description: ' + this.description + '\n' +
      'Packages Count: ' + this.items.length + '\n' +
      (this.sent.length > 0 ? ('Sent packages: ' + this.sent.length +  '\n') : '') +
      (this.received.length > 0 ? ('Received packages: ' + this.received.length +  '\n') : '')
    );
  }
}
