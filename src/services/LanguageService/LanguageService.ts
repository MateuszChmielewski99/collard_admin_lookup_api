import createEntityReference from '../../factories/EntityReference.factory';
import ILangaugeRepository from '../../repositories/LanguageRepository/ILanguageRepository';
import { inject, injectable } from 'tsyringe';
import ILanguageService from './ILanguageService';

@injectable()
export class LanguageService implements ILanguageService {
    constructor(@inject("ILanguageRepository") private languageRepository:ILangaugeRepository){}

    public async getAll(){
        const languages = await this.languageRepository.getAll();
        const dtos = languages?.map(createEntityReference);
        
        return dtos;
    }
}