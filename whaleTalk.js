// Converts a string to 'whale talk'
// Whale talk has no consonants, and each 'e' or 'u' is doubled. 
const getWhaleTalk = function (input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let resultArray = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        resultArray.push(input[i]);
      } 
    } if (input[i] === 'e') {
      resultArray.push(input[i]);
    } if (input[i] === 'u') {
      resultArray.push(input[i]);
    }
  } 
    let whaleTalk = resultArray.join('');
    let whaleTalkPrint = whaleTalk.toUpperCase();
    console.log(whaleTalkPrint);
}

getWhaleTalk('turpentine and turtles');