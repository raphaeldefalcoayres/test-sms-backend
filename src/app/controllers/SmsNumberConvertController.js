import { object, string } from 'yup';
import { convertNumbersToMessage } from '../../lib/converters';

class SmsNumberConvertController {
  async store(req, res) {
    const schema = object().shape({
      number: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { number } = req.body;

    const message = convertNumbersToMessage(number);

    return res.json({ message });
  }
}

export default new SmsNumberConvertController();