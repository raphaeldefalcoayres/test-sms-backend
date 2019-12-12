import SmsMessageConvertController from '../src/app/controllers/SmsMessageConvertController';

describe('SMS - Message', () => {
  it('should convert message in numbers', async () => {
    const text = 'TESTE DE MESA';

    const numbers = SmsMessageConvertController.convertMessageToNumbers(text);

    expect(numbers).toEqual('833777783303_33063377772');
  });
  it('should not convert numbers in numbers', async () => {
    const text = '833777783303_33063377772';

    const numbers = SmsMessageConvertController.convertMessageToNumbers(text);

    expect(numbers).toEqual(false);
  });
});
