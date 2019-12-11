import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/message-to-numbers', (req, res) => {
  const { message } = req.body;

  return res.json({ api: 'ok' });
});

export default routes;
