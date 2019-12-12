import * as Yup from 'yup';
import dictionary from '../../lib/dictionary';

class SmsNumberConvertController {
  convertNumbersToMessage(number) {
    if (parseInt(number, 0)) {
      const parts = number.match(/([0-9])\1*/g);

      let oldMessage = '';

      parts.forEach((part, index) => {
        const new_dictionary_part = dictionary.find(item => {
          return item.number === part && part !== '_';
        }).letter;

        if (index > 0) {
          const old_dictionary_part = dictionary.find(item => {
            return item.number === parts[index - 1];
          }).letter;

          if (
            String(old_dictionary_part).substr(0, 1) ===
            String(new_dictionary_part).substr(0, 1)
          ) {
            oldMessage += '_';
          }
        }

        oldMessage += new_dictionary_part;
      });

      return oldMessage;
    }
    return false;
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      message: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { numbers } = req.body;

    const message = SmsNumberConvertController.convertNumbersToMessage(numbers);

    return res.json({ message });
  }
}

export default new SmsNumberConvertController();
