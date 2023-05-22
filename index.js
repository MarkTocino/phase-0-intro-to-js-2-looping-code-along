// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];
const event = "birthday"
function writeCards(names, event) {
  const array = [];
  for (let i = 0; i < names.length; i++) {
    const birthdays = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  array.push(birthdays);
  }
  return array;
}
console.log(writeCards(["Charlie", "Samip","Ali"], "birthday"));
function countDown() {
  let numbers = 10
  while  (numbers >= 0)
    console.log(numbers--);
}
(countDown(10));

