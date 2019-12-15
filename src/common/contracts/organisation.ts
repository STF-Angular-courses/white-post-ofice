import {IOrganisation} from '../models/organisation.model';
import {IPerson} from '../models/person.model';

export default abstract class Organisation implements IOrganisation {
  constructor(
    public id: string,
    public type: string,
    public name: string,
    public address: string,
    public telephone: string,
    public screen?: string,
    public description?: string,
    public owner?: string | IOrganisation | IPerson
  ) { }
}
