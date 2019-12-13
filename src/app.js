import 'dotenv/config';
import './bootstrap';
import swaggerUi from 'swagger-ui-express';

import express from 'express';
import cors from 'cors';
import Youch from 'youch';
import swaggerConfig from './config/swagger';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
    this.server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
  }

  routes() {
    this.server.use(routes);
  }

  exeptionHandler() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        return res.status(500).json(errors);
      }

      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

export default new App().server;
