import {ILogger} from '../interfaces/logger-interface';
import Organisation from './organisation';
import {PostCompany} from './post-company';
import {IPostDepartment} from '../models/post-department.model';
import {IPackage} from '../models/package.model';

export default class PostDepartment extends  Organisation implements  IPostDepartment, ILogger {
  constructor(
    id: string,
    type: string,
    name: string,
    address: string,
    telephone: string,
    screen: string,
    description: string,
    // public parent: PostCompany | string,
    public parent: string,
    public packages: IPackage[] = []
  ) {
    super(id, type, name, address, telephone, screen, description);
  }
  logData() {
    console.log(
      '\nPost Department: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Name: ' + this.name + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      // (this.parent instanceof PostCompany) ? 'Parent Company: ' + this.parent.name : 'Parent ID' + this.parent + '\n' +
      'Parent Company ID: ' + this.parent + '\n' +
      'Packages Count: ' + this.packages.length + '\n'
    );
  }
}
