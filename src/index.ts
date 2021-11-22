import createApp from './app';
import { normalizePort } from './utils';
import { APP_PORT } from './config';

(async () => {
  const app = createApp();

  const port = normalizePort(APP_PORT);

  app.listen(port, () => console.log(`server running at port ${port}`));
})();
