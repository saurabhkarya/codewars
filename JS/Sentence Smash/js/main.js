// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  let smashedWords = "";
  words.forEach((element) => {
    smashedWords += element + " ";
  });

  return smashedWords.trim();
}

//Test

let arr = ["hello", "world", "this", "is", "great"];
alert(smash(arr));
