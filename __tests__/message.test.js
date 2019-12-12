import { convertMessageToNumbers } from '../src/lib/converters';
import { number, message } from './util/standard_data';

describe('Unitary tests', () => {
  describe('SMS - Message', () => {
    it('should convert message in numbers', async () => {
      const numbers = convertMessageToNumbers(message);

      expect(numbers).toEqual(number);
    });
    it('should not convert numbers in numbers', async () => {
      const numbers = convertMessageToNumbers(number);

      expect(numbers).toEqual(false);
    });
  });
});
