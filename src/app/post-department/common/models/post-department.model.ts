import Package from '../../../package/common/contracts/package';
import {PackageModel} from '../../../package/common/models/package.model';
import {DepartmentModel} from './department.model';

export   interface PostDepartmentModel extends  DepartmentModel {
  packages: Package[]  | PackageModel[];
}
