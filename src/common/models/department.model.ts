import {IOrganisation} from './organisation.model';

export   interface IDepartment {
   parent: IOrganisation | string;
}
