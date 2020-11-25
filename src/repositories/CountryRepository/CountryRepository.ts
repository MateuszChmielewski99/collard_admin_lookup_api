import { BaseRepository } from "../BaseRepositry/BaseRepository";
import ICountryRepository from "./ICountryRepository";
import {LookupType} from 'collard_admin_models';
import { injectable } from 'tsyringe';
import { FilterQuery } from "mongodb";

@injectable()
export class CountryRepository extends BaseRepository<LookupType> implements ICountryRepository {
    private type:string = "Country";
    constructor(){
        super('lookuptypes');
    }

    public getAll(){
        const query:FilterQuery<LookupType> = {
            Type:this.type
        }

        return this.getByQuery(query);
    }
}