import PostDepartment from '../contracts/post-department';

export interface IPackage {
  id: string;
  clientId: string;
  // client: IOrganisation | IPerson;
  type: string;
  name: string;
  screen: string;
  description: string;
  height: string;
  width: string;
  weight: string;
  price: string;
  startingPoint: PostDepartment;
  destinationPoint: PostDepartment;
}
