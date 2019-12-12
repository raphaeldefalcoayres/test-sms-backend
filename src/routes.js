import { Router } from 'express';

import SmsMessageConvertController from './app/controllers/SmsMessageConvertController';
import SmsNumberConvertController from './app/controllers/SmsNumberConvertController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/sms/message-convert', SmsMessageConvertController.store);
routes.post('/sms/number-convert', SmsNumberConvertController.store);

export default routes;
