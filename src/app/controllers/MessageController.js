import { object, string } from 'yup';
import { convertMessageToNumbers } from '../../lib/converters';
import Message from '../schemas/Message';

class MessageController {
  async index(req, res) {
    const messages = await Message.find().sort({ createdAt: 'desc' });
    return res.json(messages);
  }

  async store(req, res) {
    const schema = object().shape({
      message: string()
        .max(255)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { message } = req.body;

    const numbers = convertMessageToNumbers(message);

    await Message.create({
      user: req.ip,
      content: message,
      numbers,
    });

    return res.json({ numbers });
  }
}

export default new MessageController();