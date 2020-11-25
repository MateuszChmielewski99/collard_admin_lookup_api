import { BaseRepository } from '../../repositories/BaseRepositry/BaseRepository';
import countries from './countries';
import { SeedLookupType } from 'seed/utils/SeedLookupType';

const repo = new BaseRepository<SeedLookupType>('lookuptypes');
const type = 'Country';

const mapToEntity = (country: string): SeedLookupType => {
  return {
    Name: country,
    Type: type,
    _ts: Date.now(),
  };
};

const seedLanguages = async () => {
  const entities = countries.map(mapToEntity);
  await repo.insertMany(entities);
};

(async () => await seedLanguages())();
