import { Router } from 'express';

import MessageController from './app/controllers/MessageController';
import NumberController from './app/controllers/NumberController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/messages/convert/sms', MessageController.store);
routes.post('/numbers/convert/sms', NumberController.store);

export default routes;
