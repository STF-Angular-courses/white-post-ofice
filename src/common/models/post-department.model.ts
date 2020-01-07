import {DepartmentModel} from './department.model';
import {PackageModel} from './package.model';
import Package from '../contracts/package';

export   interface PostDepartmentModel extends  DepartmentModel {
  packages: Package[]  | PackageModel[];
}
