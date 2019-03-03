/*
* Реализовать ф-цию sum которая принимает любое кол-во аргументов и возвращает сумму всех аргументов
sum(1,2,3)  // 6
sum(1)  // 1
*
* */

function sum() {
  var sum = 0;
  if (arguments.length > 0) {
    for (var index in arguments) {
      const argument = arguments[index];
      sum += argument;
    }
  }
  return sum;
}

console.log('sum(1,2,3)', sum(1,2,3));  // 6
console.log('sum(1)', sum(1)); // 1
