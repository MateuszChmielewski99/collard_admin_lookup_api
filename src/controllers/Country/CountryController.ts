import express, { Request, Response, Router } from 'express';
import { container } from 'tsyringe';
import { CountryService } from '../../services/CountryService/CountryService';
import ICountryService from '../../services/CountryService/ICountryService';

const CountryRouter: Router = express.Router();

const getAllCountries = async (_req: Request, res: Response) => {
  const service: ICountryService = container.resolve(CountryService);

  const result = await service.getAll();
  res.json(result ?? []);
};

CountryRouter.get('/get_all', getAllCountries);

export default CountryRouter;
