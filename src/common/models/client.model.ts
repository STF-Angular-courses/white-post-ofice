import {IPackage} from './package.model';

export interface IClient {
  id: string;
  category: string;
  name: string;
  address: string;
  telephone: string;
  discount: number | boolean;
  screen: string;
  description: string;
  items: IPackage[];
  sent: IPackage[];
  received: IPackage[];
}
