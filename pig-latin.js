const args = process.argv.slice(2);

const pigLatin = function(words) {
  let translatedWords = '';
  for (const word of words) {
    translatedWords += `${word.slice(1)}${word[0]}ay `;
  }
  console.log(translatedWords);
};

pigLatin(args);