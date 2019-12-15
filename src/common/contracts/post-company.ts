import {ILogger} from '../interfaces/logger-interface';
import Organisation from './organisation';
import {IPostCompany} from '../models/post-company.model';
import {IOrganisation} from '../models/organisation.model';
import {IPerson} from '../models/person.model';
import {IPostDepartment} from '../models/post-department.model';

export class PostCompany extends Organisation implements  IPostCompany, ILogger {
  constructor(
     id: string,
     type: string,
     name: string,
     address: string,
     telephone: string,
     owner: string | IOrganisation | IPerson,
     screen: string,
     description: string,
     public departments: IPostDepartment[] = []
  ) {
    super(id, type, name, address, telephone,  screen, description, owner);
  }
  logData() {
    console.log(
      '\nCompany: ' + this.name +
      'ID: ' + this.id + '\n' +
      'Type: ' + this.type + '\n' +
      'Address: ' + this.address + '\n' +
      'Tel: ' + this.telephone + '\n' +
      'Owner: ' + this.owner + '\n' +
      'Departments: ' + this.departments.length  + '\n'
    );
  }
}
