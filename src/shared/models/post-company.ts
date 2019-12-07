import {IOrganisation} from './interfaces/organisation-interface';
import {IPostCompany} from './interfaces/post-company-interface';
import {ILogger} from './interfaces/logger-interface';
import {IPerson} from './interfaces/person-interface';
import Organisation from './organisation';
import {IPostDepartment} from './interfaces/post-department-interface';

export class PostCompany extends Organisation implements  IPostCompany, ILogger {
  constructor(
     id: string,
     type: string,
     name: string,
     address: string,
     telephone: string,
     owner: string | IOrganisation | IPerson,
     public departments: IPostDepartment[] = []
  ) {
    super(id, type, name, address, telephone, owner);
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
