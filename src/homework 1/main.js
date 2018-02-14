/**
 *
 * This function takes a single string and returns a copy of the string
 * with all alphabets converted to uppercase characters.
 *
 * */

function upperCase(s) {
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      charCode -= 32;
    }
    temp += String.fromCharCode(charCode);
  }
  return temp;
}

/**
 *
 * This function takes a single string and returns a copy of the string
 * with all alphabets converted to lowercase characters.
 *
 * */

function lowerCase(s) {
  let temp = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += 32;
    }
    temp += String.fromCharCode(charCode);
  }
  return temp;
}


/**
 *
 * This function takes two arguments: a single string (str) and an array of
 * strings (unconditionallyCapitalized[]). This function returns a copy of str
 * with the first letter of the first word capitalized, and all other words
 * lowercase, except for words that are unconditionally capitalized, such as
 * proper nouns and "I". The unconditionallyCapitalized array contains all words
 * that should be unconditionally capitalized.
 *
 * */

function sentenceCase(s, array) {
  const helper = function (str) {
    str = str.toLowerCase();
    const regex = /(^|\. *)([a-z])/g;
    return str.replace(regex, e => {
      return e.toUpperCase()
    })
  };
  let temp = helper(s).split(' ');
  for (let i = 0; i < temp.length; i++) {
    for (let j = 1; j < array.length; j++) {
      array[j] = array[j].toLowerCase();
      if (temp[i] === array[0] || temp[i].includes(array[j])) {
        temp[i] = temp[i].charAt(0).toUpperCase() + temp[i].substr(1);
      }
    }
  }
  return temp.join(' ');
}

/**
 *
 * This function takes a single string and returns a copy of the string with
 * the first character of each word converted to uppercase.
 *
 * */

function capitalizedCase(s) {
  let split = s.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].substr(1);
  }
  return split.join(' ');
}

/**
 *
 * This function takes a single string and returns a copy of the string
 * comprised of characters that alternate between lower and uppercase.
 *
 * */

function alternatingCase(s) {
  let split = s.toLowerCase().split('');
  for (let i = 1; i < split.length; i += 2) {
    split[i] = split[i].toUpperCase();
  }
  return split.join('');
}

/**
 *
 * This function takes two arguments: a single string (str) and an array of
 * strings (lowercaseWords[]). It returns a copy of str with the initial letter
 * of each word capitalized. After the first word in the string, however, articles,
 * conjunctions, and prepositions not more than five letters long should all be
 * lower case. The lowercaseWords array contains all words that should be lowercase.
 *
 * */

function titleCase(s, array) {
  let split = s.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (split[i] === array[j]) {
        i++;
      } else {
        split[i] = split[i].charAt(0).toUpperCase() + split[i].substr(1);
      }
    }
  }
  return split.join(' ');
}

/**
 *
 * This function takes a single string and returns a copy of the string with the
 * first letter of each word lowercase, and all other letters in the word uppercase.
 *
 * */

function inverseCase(s) {
  let split = s.toLowerCase().split(' ');
  for (let i = 0; i < split.length; i++) {
    split[i] = split[i].charAt(0).toLowerCase() + split[i].substr(1).toUpperCase();
  }
  return split.join(' ');
}

function runStringFunctions() {
  let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.';

  let unconditionallyCapitalized = ['I', 'Moon', 'Shadow'];
  let lowercaseWords = ['the', 'of', 'in', 'an'];

  console.log('upperCase: ', upperCase(str));
  console.log('lowerCase: ', lowerCase(str));
  console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized));
  console.log('capitalizedCase: ', capitalizedCase(str));
  console.log('alternatingCase: ', alternatingCase(str));
  console.log('titleCase: ', titleCase(str, lowercaseWords));
  // wanted a linebreak
  console.log(`inverseCase: ${inverseCase(str)}\n`);
}

function getCharacterFrequency(s) {
  let frequency = {};
  for (let i = 0; i < s.length; i++) {
    let element = s[i];
    if (element in frequency) {
      frequency[element]++
    } else {
      frequency[element] = 1;
    }
  }
  return frequency;
}

function printCharacterFrequency(object) {
  // key, value object
  for (let i in object) {
    if (object[i] <= 1) {
      console.log(`'${i}' occurs ${object[i]} time`);
    } else {
      console.log(`'${i}' occurs ${object[i]} times`);
    }
  }
}

function runCharacterFunctions() {
  let str = 'Hello, World!';
  let frequencyObj = getCharacterFrequency(str);

  printCharacterFrequency(frequencyObj);
}

runStringFunctions();
runCharacterFunctions();