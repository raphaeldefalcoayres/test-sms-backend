import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ api: 'ok' });
});

routes.post('/message-to-numbers', (req, res) => {
  const { message } = req.body;

  const dictionary = [
    { letter: 'A', number: '2' },
    { letter: 'B', number: '22' },
    { letter: 'C', number: '222' },
    { letter: 'D', number: '3' },
    { letter: 'E', number: '33' },
    { letter: 'F', number: '333' },
    { letter: 'G', number: '4' },
    { letter: 'H', number: '44' },
    { letter: 'I', number: '444' },
    { letter: 'J', number: '5' },
    { letter: 'K', number: '55' },
    { letter: 'L', number: '555' },
    { letter: 'M', number: '6' },
    { letter: 'N', number: '66' },
    { letter: 'O', number: '666' },
    { letter: 'P', number: '7' },
    { letter: 'Q', number: '77' },
    { letter: 'R', number: '777' },
    { letter: 'S', number: '7777' },
    { letter: 'T', number: '8' },
    { letter: 'U', number: '88' },
    { letter: 'V', number: '888' },
    { letter: 'W', number: '9' },
    { letter: 'X', number: '99' },
    { letter: 'Y', number: '999' },
    { letter: 'Z', number: '9999' },
    { letter: ' ', number: '0' },
  ];

  const convertMessageToNumbers = text => {
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
  };

  const convertNumbersToMessage = number => {
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
  };

  const numbers = convertMessageToNumbers(message);
  const oldMessage = convertNumbersToMessage(numbers);

  return res.json({ numbers, oldMessage });
});

export default routes;
