import request from 'supertest';
import app from '../../src/app';

import { number, message } from '../util/standard_data';

describe('Integration tests', () => {
  describe('SMS - numbers', () => {
    it('should list numbers', async () => {
      const response = await request(app).get('/numbers');
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.arrayContaining([]));
    });
    it('should store numbers converted in message', async () => {
      const response = await request(app)
        .post('/numbers/convert/sms')
        .send({ number });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toEqual(message);
    });
  });
  describe('SMS - numbers', () => {
    it('should store text not converted in message', async () => {
      const response = await request(app)
        .post('/numbers/convert/sms')
        .send({ message });
      expect(response.status).toBe(400);
    });
  });
});
