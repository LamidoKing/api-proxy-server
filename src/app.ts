import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { notFound, serverError } from './middleware';
import proxy from './routes';

const createApp = () => {
  const app = express();

  app.use(express.json());

  app.use(cors({ credentials: true, origin: true }));

  app.use(helmet());

  app.use('/api/v1', proxy);

  app.use(notFound);

  app.use(serverError);

  return app;
};

export default createApp;
