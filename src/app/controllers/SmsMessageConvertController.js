import { object, shape, string, required } from 'yup';
import { convertMessageToNumbers } from '../../lib/converters';

class SmsMessageConvertController {
  async store(req, res) {
    const schema = object().shape({
      message: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { message } = req.body;

    const numbers = convertMessageToNumbers(message);

    return res.json({ numbers });
  }
}

export default new SmsMessageConvertController();
