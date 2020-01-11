import PostDepartment from '../../../post-department/common/contracts/post-department.contract';

export  interface PostCompanyModel  {
  departments: PostDepartment[] | string[];
}
