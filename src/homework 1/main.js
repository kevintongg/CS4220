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

function sentenceCase(s) {

}

function runStringFunctions() {
  let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.';

  let unconditionallyCapitalized = ['I', 'Moon', 'Shadow'];
  let lowercaseWords = ['the', 'of', 'in', 'an'];

  console.log('upperCase: ', upperCase(str));
  console.log('lowerCase: ', lowerCase(str));
  console.log('sentenceCase: ', sentenceCase(str, unconditionallyCapitalized));
  // console.log('capitalizedCase: ', capitalizedCase(str));
  // console.log('alternatingCase: ', alternatingCase(str));
  // console.log('titleCase: ', titleCase(str, lowercaseWords));
  // console.log('inverseCase: ', inverseCase(str));
}

runStringFunctions();