const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

let guesses = 3;
let hintFlag = false;
let success = false;
let doc = document;
let i = parseInt(Math.random() * 10 + 1);

let clue = doc.getElementById("clue");
let label = doc.getElementById("guesses");
let form = doc.getElementById("form");
let hint = doc.getElementById("hint");
console.log(doc);

clue.innerHTML = `Hint: ${movies[i].explanation}`;

function onSubmit(event) {
  event.preventDefault();

  let userInput = doc.getElementById("userGuess");

  if (userInput.value.toLowerCase() == movies[i].title.toLowerCase()) {
    clue.innerHTML = `Correct! Great job, you guessed that the movie was "${movies[i].title}"`;
  } else {
    guesses--;
    label.innerHTML = `${guesses} guesses left:`;
  }

  if (guesses <= 0) {
    clue.innerHTML = `Too bad! Out of Guesses. The correct answer was ${movies[i].title}`;
  }

  console.log(userInput);
  console.log(userInput.value);
  console.log(movies[i].title);

  userInput.value = "";
}

function hintReq(event) {
  event.preventDefault();
  hint.innerHTML = `Here's another hint: ${movies[i].hint}`;
}
