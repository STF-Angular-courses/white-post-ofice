import {IPackage} from './package.model';
import {IDepartment} from './department.model';

export   interface IPostDepartment extends  IDepartment {
  packages: IPackage[];
}
