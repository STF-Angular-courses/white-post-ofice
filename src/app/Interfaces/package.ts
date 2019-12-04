import { PostDepartment } from '../../models/post-department.model';

export interface IPackage {
  name: string;
  startingPoint: PostDepartment;
  destinationPoint: PostDepartment;
  description: string;
  price: number;
}
