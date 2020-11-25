import { IBaseRepository } from '../BaseRepositry/IBaseRepository';
import { LookupType } from 'collard_admin_models';

interface ICountryRepository extends IBaseRepository<LookupType> {
  getAll(): Promise<LookupType[] | undefined>;
}

export default ICountryRepository;
