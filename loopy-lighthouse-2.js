// We will be writing a program that prints the numbers from 100 to 200 to the console, with three exceptions:

// If the number is a multiple of 3, print the string "Loopy" instead of the number.
// If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
// If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
// By print, we are referring to console.log.

const loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) console.log(words[0] + words[1]);
    else if (i % multiples[0] === 0) console.log(words[0]);
    else if (i % multiples[1] === 0) console.log(words[1]);
    else console.log(i);
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);