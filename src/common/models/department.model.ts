import Organisation from '../contracts/abstract-organisation.contract';

export   interface DepartmentModel {
   parent: Organisation | string;
}
