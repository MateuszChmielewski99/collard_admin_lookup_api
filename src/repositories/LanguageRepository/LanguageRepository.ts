import { BaseRepository } from '../BaseRepositry/BaseRepository';
import ILanguageRepository from './ILanguageRepository';
import { LookupType } from 'collard_admin_models';
import { injectable } from 'tsyringe';
import { FilterQuery } from 'mongodb';

@injectable()
export class LanguageRepository extends BaseRepository<LookupType>
  implements ILanguageRepository {
  private type: string = 'Language';
  constructor() {
    super('lookuptypes');
  }

  public getAll() {
    const query: FilterQuery<LookupType> = {
      Type: this.type,
    };

    return this.getByQuery(query);
  }
}
