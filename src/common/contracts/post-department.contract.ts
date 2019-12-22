import {ILogger} from '../interfaces/logger-interface';
import Organisation from './abstract-organisation.contract';
import {PostDepartmentModel} from '../models/post-department.model';
import Package from './package';
import {PackageModel} from '../models/package.model';

export default class PostDepartment extends  Organisation implements  PostDepartmentModel, ILogger {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public address: string,
    public telephone: string,
    public screen: string,
    public description: string,
    public parent: string,
    public owner: string,
    public packages: Package[] | PackageModel[] = []
  ) {
    super();
  }
  logData() {
    console.log(
      '\nPost Department: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Name: ' + this.name + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Parent Company ID: ' + this.parent + '\n' +
      'Packages Count: ' + this.packages.length + '\n'
    );
  }
}
