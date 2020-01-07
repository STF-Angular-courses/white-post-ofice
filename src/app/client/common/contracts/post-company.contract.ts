import {ILogger} from '../interfaces/logger-interface';
import Person from './person.contract';
import Organisation from './abstract-organisation.contract';
import PostDepartment from './post-department.contract';
import {PostCompanyModel} from '../models/post-company.model';

export class PostCompany extends Organisation implements  PostCompanyModel, ILogger {
  constructor(
     public id: string,
     public type: string,
     public name: string,
     public address: string,
     public telephone: string,
     public owner: string | Organisation | Person,
     public screen: string,
     public description: string,
     public departments: PostDepartment[] | string[] = []
  ) {
    super();
  }
  logData() {
    console.log(`
      Company: ${this.name};
      ID:  ${this.id} ;
      Type:  ${this.type} ;
      Address:  ${this.address} ;
      Tel:  ${this.telephone} ;
      Owner:  ${this.owner} ;
      Departments:  ${this.departments.length};
    `);
  }
}
