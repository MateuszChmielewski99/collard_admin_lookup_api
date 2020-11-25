import { BaseRepository } from '../../repository/BaseRepositry/BaseRepository';
import { SeedLookupType } from '../utils/SeedLookupType';
import { langauges } from './languages';

const type = 'Language';
const repo = new BaseRepository<SeedLookupType>('lookuptypes');

const mapToEntity = (data: { code: string; name: string }): SeedLookupType => {
  return {
    Name: data.name,
    Type: type,
    _ts: Date.now(),
  };
};

const seedLanguages = async () => {
  const entities = langauges.map(mapToEntity);
  await repo.insertMany(entities);
};

(async () => await seedLanguages())();
