import { IPackage } from '../app/Interfaces/package';
import { PostDepartmentModel } from './post-department.model';

export class LetterModel implements IPackage {
  constructor(
    public fromPerson: string,
    public toPerson: string,
    public description: string,
    public destinationPoint: PostDepartmentModel,
    public name: string,
    public price: number,
    public startingPoint: PostDepartmentModel
  ) {}
}
