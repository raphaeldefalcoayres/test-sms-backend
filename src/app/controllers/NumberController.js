import { object, string } from 'yup';
import { convertNumbersToMessage } from '../../lib/converters';
import Number from '../schemas/Number';

class NumberController {
  async index(req, res) {
    const numbers = await Number.find().sort({ createdAt: 'desc' });
    return res.json(numbers);
  }

  async store(req, res) {
    const schema = object().shape({
      number: string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { number } = req.body;

    const message = convertNumbersToMessage(number);

    const { user, content, createdAt } = await Number.create({
      user: req.ip,
      content: number,
      message,
    });

    return res.json({ user, content, message, createdAt });
  }
}

export default new NumberController();
