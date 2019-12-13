import request from 'supertest';
import app from '../../src/app';

import { number, message } from '../util/standard_data';

describe('Integration tests', () => {
  describe('SMS - Message', () => {
    it('should store message converted in numbers', async () => {
      const response = await request(app)
        .post('/messages/convert/sms')
        .send({ message });
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('numbers');
      expect(response.body.numbers).toEqual(number);
    });

    it('should store numbers not converted in numbers', async () => {
      const response = await request(app)
        .post('/messages/convert/sms')
        .send({ number });
      expect(response.status).toBe(400);
    });
  });
});
