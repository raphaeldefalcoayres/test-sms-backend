import request from 'supertest';
import app from '../../src/app';

import { number, message } from '../util/standard_data';

describe('Integration tests', () => {
  describe('SMS - numbers', () => {
    it('should store numbers converted in message', async () => {
      const response = await request(app)
        .post('/sms/number-convert')
        .send({ number });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toEqual(message);
    });
  });
  describe('SMS - numbers', () => {
    it('should store text not converted in message', async () => {
      const response = await request(app)
        .post('/sms/number-convert')
        .send({ message });
      expect(response.status).toBe(400);
    });
  });
});
