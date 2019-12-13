import { object, string } from 'yup';
import { convertNumbersToMessage } from '../../lib/converters';
import Number from '../schemas/Number';

class NumberController {
  async store(req, res) {
    const schema = object().shape({
      number: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { number } = req.body;

    const message = convertNumbersToMessage(number);

    await Number.create({
      user: req.ip,
      content: number,
      message,
    });

    return res.json({ message });
  }
}

export default new NumberController();
