import {EntityReference} from 'collard_admin_models';

interface ICountryService {
    getAll():Promise<EntityReference[] | undefined>
}

export default ICountryService;