import SmsNumberConvertController from '../src/app/controllers/SmsNumberConvertController';

describe('SMS - Number', () => {
  it('should convert numbers in message', async () => {
    const string = '833777783303_33063377772';

    const numbers = SmsNumberConvertController.convertNumbersToMessage(string);

    expect(numbers).toEqual('TESTE DE MESA');
  });
  it('should not convert message in message', async () => {
    const string = 'TESTE DE MESA';

    const numbers = SmsNumberConvertController.convertNumbersToMessage(string);

    expect(numbers).toEqual(false);
  });
});
