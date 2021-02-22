// A mini linter program to improve the writing quality of a string.

// The text to be linted
let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];
let overusedWordsCount = 0;
let unnecessaryWordsCount = 0;
let sentenceCount = 0;
let storyWords = story.split(' ');

// Remove unneccesary words. Keep a tally of occurrences. 
const betterWords = storyWords.filter(words => {
  if (unnecessaryWords.includes(words)) {
    unnecessaryWordsCount++;
  } else {
    return words;
  }
});

// Remove overused words. Keep a tally of occurrences. 
const betterWords2 = betterWords.filter(words => {
  if (overusedWords.includes(words)) {
    overusedWordsCount++;
  } else {
    return words;
  }
});

// Sentence counter
betterWords2.forEach(word => {
  if (word[word.length-1] === '!' || word[word.length-1] === '.') {
    sentenceCount++;
  }
})

// Message to inform user about text stats
let lintedCount = overusedWordsCount + unnecessaryWordsCount;
let errorsMsg = `The text contains ${sentenceCount} sentences,\n${unnecessaryWordsCount} unnecessary words,\nand ${overusedWordsCount} overused words.\nThere are a total of ${lintedCount} words that can be replaced or omitted.\n`;
console.log(errorsMsg);

// Joins the individual strings back into a single string, then prints the final linted result to the console.
let stringified = betterWords2.join(' ');
console.log(stringified);
