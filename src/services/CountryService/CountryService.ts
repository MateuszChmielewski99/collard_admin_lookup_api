import createEntityReference from '../../factories/EntityReference.factory';
import ICountryRepository from '../../repositories/CountryRepository/ICountryRepository';
import { inject, injectable } from 'tsyringe';
import ICountryService from './ICountryService';

@injectable()
export class CountryService implements ICountryService {
    constructor(@inject("ICountryRepository") private countryRepository:ICountryRepository){}

    public async getAll(){
        const countries = await this.countryRepository.getAll();
        const dtos = countries?.map(createEntityReference);
        
        return dtos;
    }
}