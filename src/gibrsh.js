let randint = (min, max) => {
  return Math.floor(Math.random() * (max - min) ) + min;
}
let rchoice = (array) => {
  return array[randint(0, array.length)];
}

let generate = (wordCount, wordMaxLength) => {
  let vs = [
    "a", "e", "i", "o", "u", "ao", "oe", "oy",
    "oi", "ei", "io", "ou", "iu", "ia", "ie", "ai",
  ];

  let cs = [
    "b", "c", "d", "f", "g", "h", "j", "k", "l",
    "m", "n", "p", "q", "r", "s", "t", "v", "w",
    "x", "y", "z",
  ];

  let result = "";

  for (let i = 0; i < wordCount; i++) {
    for (let j = 0; j < randint(1, wordMaxLength); j++) {
      result += rchoice(cs) + rchoice(vs);
    }
    result += " ";
  }

  return result;
};

let paper = document.getElementById("paper");

paper.innerHTML = generate(100, 6);

