import dictionary from './dictionary';

export function convertMessageToNumbers(text) {
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

export function convertNumbersToMessage(number) {
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
