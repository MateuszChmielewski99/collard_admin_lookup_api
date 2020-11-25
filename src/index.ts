import 'reflect-metadata';
import express, { Application } from 'express';
import { bootstrap } from './container-setup';
import CountryRouter from './controllers/Country/CountryController';
import LanguageRouter from './controllers/Langauge/LangaugeController';

bootstrap();

const app:Application = express();

app.use('/country', CountryRouter);
app.use('/language', LanguageRouter);

const port = process.env.PORT || 6000;
app.listen(port, () => {
  console.log('lookup app and running')
})