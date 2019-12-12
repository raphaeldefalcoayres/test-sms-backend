import * as Yup from 'yup';
import dictionary from '../../lib/dictionary';

class SmsMessageConvertController {
  convertMessageToNumbers(text) {
    // check text is a string number
    if (!parseInt(text, 0)) {
      const parts = text.split('');
      let numbers = '';

      parts.forEach((part, index) => {
        const new_dictionary_part = dictionary.find(item => {
          return item.letter === part;
        }).number;

        if (index > 0) {
          const old_dictionary_part = dictionary.find(item => {
            return item.letter === parts[index - 1];
          }).number;

          if (
            String(old_dictionary_part).substr(0, 1) ===
            String(new_dictionary_part).substr(0, 1)
          ) {
            numbers += '_';
          }
        }

        numbers += new_dictionary_part;
      });

      return numbers;
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

    const { message } = req.body;

    const numbers = SmsMessageConvertController.convertMessageToNumbers(
      message
    );

    return res.json({ numbers });
  }
}

export default new SmsMessageConvertController();
