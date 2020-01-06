import PostDepartment from '../contracts/post-department.contract';

export  interface PostCompanyModel  {
  departments: PostDepartment[] | string[];
}
