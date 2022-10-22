const args = process.argv.slice(2);

const reverse = function(string) {
  for (const items of string) {
    let result = '';
    for (let i = items.length - 1; i > -1; i--) {
      result += items[i];
    }
    console.log(result);
  }
};

reverse(args);