import {ILogger} from '../interfaces/logger-interface';
import PersonModel from '../models/person.model';

export default class Person implements PersonModel, ILogger {
  constructor(
    public name: string,
    public id: string,
    public sex: string,
    public age: number,
    public passport: string,
    public address: string,
    public telephone: string,
    public screen: string,
    public description: string,
  ) {}
  logData() {
    console.log(`
      Person client: ${this.name};
      ID: ${this.id};
      Age: ${this.age};
      Address: ${this.address};
      Tel: ${this.telephone};
      Description: ${this.description};
    `);
  }
}
