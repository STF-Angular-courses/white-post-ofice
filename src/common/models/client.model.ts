import {IPackage} from './package.model';

export interface IClient {
  id: string;
  items: IPackage[];
  sent: IPackage[];
  received: IPackage[];
}
