import { IPackage } from '../app/Interfaces/package';
import { PostDepartmentModel } from './post-department.model';

export class BoxModel implements IPackage {
  constructor(
    public weight: number,
    public height: number,
    public width: number,
    public description: string,
    public destinationPoint: PostDepartmentModel,
    public name: string,
    public price: number,
    public startingPoint: PostDepartmentModel
  ) {}
}
