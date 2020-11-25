import express, { Request, Response, Router } from 'express';
import ILanguageService from '../../services/LanguageService/ILanguageService';
import { container } from 'tsyringe';
import { LanguageService } from '../../services/LanguageService/LanguageService';

const LanguageRouter: Router = express.Router();

const getAllLanguages = async (_req: Request, res: Response) => {
  const service: ILanguageService = container.resolve(LanguageService);

  const result = await service.getAll();
  res.json(result ?? []);
};

LanguageRouter.get('/get_all', getAllLanguages);

export default LanguageRouter;
