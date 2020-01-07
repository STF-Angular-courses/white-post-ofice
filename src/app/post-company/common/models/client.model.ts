import {PackageModel} from './package.model';
import Package from '../contracts/package';

export default interface ClientModel {
  id: string;
  category: string;
  name: string;
  address: string;
  telephone: string;
  discount: number | boolean;
  screen: string;
  description: string;
  items?: Package[] | PackageModel[] | string [];
  sent?: Package[] | PackageModel[] | string [];
  received?: Package[] | PackageModel[] | string [];
}
