function upperCase(s) {
  let ret = '';
  for (let i = 0; i < s.length; i++) {
    if (/[.^a-zA-Z]/) {
      ret += String.fromCharCode(s.charCodeAt(i) & 223);
    }
  }
  return ret;
}

function lowerCase(s) {
  let ret = '';
  for (let i = 0; i < s.length; i++) {
    ret += String.fromCharCode(s.charCodeAt(i) + 32)
  }
}

function runStringFunctions() {
  let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.';

  let unconditionallyCapitalized = ['I', 'Moon', 'Shadow'];
  let lowercaseWords = ['the', 'of', 'in', 'an'];

  console.log('upperCase: ', upperCase(str));
  console.log('lowerCase: ', lowerCase(str));
  // console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized));
  // console.log('capitalizedCase: ', capitalizedCase(str));
  // console.log('alternatingCase: ', alternatingCase(str));
  // console.log('titleCase: ', titleCase(str, lowercaseWords));
  // console.log('inverseCase: ', inverseCase(str));
}

runStringFunctions();