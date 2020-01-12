import Organisation from '../contracts/abstract-organisation.contract';

export  interface OrganisationModel {
  id: string;
  type: string;
  name: string;
  address: string;
  telephone: string;
  owner?: string | Organisation;
  screen?: string;
  description?: string;
}
