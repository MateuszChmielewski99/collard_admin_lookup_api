import { container } from 'tsyringe';
import { CountryRepository } from './repositories/CountryRepository/CountryRepository';
import { LanguageRepository } from './repositories/LanguageRepository/LanguageRepository';

export const bootstrap = () => {
  container.register('ICountryRepository', {
    useClass: CountryRepository,
  });
  container.register('ILanguageRepository', {
    useClass: LanguageRepository,
  });
};
