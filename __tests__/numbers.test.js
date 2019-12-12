import { convertNumbersToMessage } from '../src/lib/converters';
import { number, message } from './util/standard_data';

describe('Unitary tests', () => {
  describe('SMS - Number', () => {
    it('should convert numbers in message', async () => {
      const numbers = convertNumbersToMessage(number);

      expect(numbers).toEqual(message);
    });
    it('should not convert message in message', async () => {
      const numbers = convertNumbersToMessage(message);

      expect(numbers).toEqual(false);
    });
  });
});
