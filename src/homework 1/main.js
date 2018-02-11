function upperCase(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) !== 32 || s.charCodeAt(i) === 46) {
      if (s.charCodeAt(i) === s.length) {
        break;
      }
      str += String.fromCharCode(s.charCodeAt(i) & 223);
    }
  }
  return str;
}

function lowerCase(s) {
  let str = '';
  for (let i = 0; i < s.length; i++) {
    str += String.fromCharCode(s.charCodeAt(i) +32);
  }
  return str;
}

function runStringFunctions() {
  let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.';
  
  let unconditionallyCapitalized = [ 'I', 'Moon', 'Shadow' ];
  let lowercaseWords = [ 'the', 'of', 'in', 'an' ];
  
  console.log('upperCase: ', upperCase(str));
  console.log('lowerCase: ', lowerCase(str));
  // console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized));
  // console.log('capitalizedCase: ', capitalizedCase(str));
  // console.log('alternatingCase: ', alternatingCase(str));
  // console.log('titleCase: ', titleCase(str, lowercaseWords));
  // console.log('inverseCase: ', inverseCase(str));
}

runStringFunctions();