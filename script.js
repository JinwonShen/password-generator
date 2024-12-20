const characters = ["@", "#", "!", "$", "?", "%", "&"];
const capLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const smallLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const formEl = document.querySelector("#form");
const limitEl = document.querySelector("#length");
const numberRadioEl = document.querySelector("#numbers");
const slettersRadioEl = document.querySelector("#sletters");
const clettersRadioEl = document.querySelector("#cletters");
const symbolsRadioEl = document.querySelector("#symbols");
const showEl = document.querySelector(".show");
let choices = [];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  choices = [];
  // 체크한 부분을 choices 배열에 push
  if (numberRadioEl.checked === true) {
    choices.push(numbers);
  }
  if (clettersRadioEl.checked === true) {
    choices.push(capLetters);
  }
  if (slettersRadioEl.checked === true) {
    choices.push(smallLetters);
  }
  if (symbolsRadioEl.checked === true) {
    choices.push(characters);
  }

  // 패스워드를 생성하기
  const password = passwordGenerator(limitEl.value);
  // 패스워드를 보여주기
  showEl.innerText = password;
});

const randomNumber = (limit) => {
  return Math.floor(Math.random() * limit);
};

const passwordGenerator = (limit) => {
  console.log(choices);
  let password = "";
  let choicesLength = choices.length;
  randomNumber(choicesLength);
  console.log(choicesLength);
  for (let i = 0; i < limit; i++) {
    const randomArray = choices[randomNumber(choicesLength)];

    let length = randomArray.length;
    password += randomArray[randomNumber(length)];
  }
  return password;
};

const copyEl = document.querySelector(".copy");
const clickCopyEl = document.querySelector(".clickCopy");

clickCopyEl.addEventListener("click", (e) => {
  const password = showEl.innerText;
  navigator.clipboard.writeText(password);

  copyEl.attributes[0].value = "assets/clipboard-check.svg";

  setTimeout(() => {
    copyEl.attributes[0].value = "assets/clipboard.svg";
  }, 3000);
});
