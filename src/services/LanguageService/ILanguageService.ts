import { EntityReference } from 'collard_admin_models';

interface ILanguageService {
  getAll(): Promise<EntityReference[] | undefined>;
}

export default ILanguageService;
