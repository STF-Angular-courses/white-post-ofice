import {ILogger} from '../interfaces/logger-interface';
import Organisation from './abstract-organisation.contract';
import {PostCompanyModel} from '../models/post-company.model';
import PostDepartment from '../../../post-department/common/contracts/post-department.contract';

export class PostCompany extends Organisation implements  PostCompanyModel, ILogger {
  constructor(
     public id: string,
     public type: string,
     public name: string,
     public address: string,
     public telephone: string,
     public owner: string | Organisation ,
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
