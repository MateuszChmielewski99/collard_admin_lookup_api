import 'reflect-metadata';
import express, { Application, Request, Response } from 'express';
import { bootstrap } from './container-setup';
import CountryRouter from './controllers/Country/CountryController';
import LanguageRouter from './controllers/Langauge/LangaugeController';

bootstrap();

const app: Application = express();

app.use('/country', CountryRouter);
app.use('/language', LanguageRouter);

app.get('/',(_req:Request, res:Response) => {
  return res.sendStatus(200);
})

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log('lookup app and running');
});
