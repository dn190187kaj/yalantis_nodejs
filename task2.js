/*
Реализовать memoization - функция, которая принимает функции с любым количеством аргументов, и если она уже вызывалась ранее с этими же аргументами - отдавать сразу ответ, если же нет, вызывать переданную функцию
function multiply(x, y){
    return x * y;
}

memoization(multiply)(1 ,2); // вычислено
memoization(multiply)(1 ,3); // вычислено
memoization(multiply)(1 ,2); // взято из кеша
memoization(sum)(1 ,3, 4)  // вычислено
memoization(sum)(10)  // вычислено
memoization(sum)(10)  // взято из кеша
*/

function multiply(x, y){
  console.log('count');
  return x * y;
}

function sum() {
  var sum = 0;
  if (arguments.length > 0) {
    for (var index in arguments) {
      const argument = arguments[index];
      sum += argument;
    }
  }
  console.log('count');
  return sum;
}

function Memoization() {
  const cash = {};
  return function(func) {
    return function() {
      // create arguments id
      let argumentsArr = [];
      if (arguments.length > 0) {
        for (let id in arguments) {
          const argument = arguments[id];
          argumentsArr.push(argument);
        }
      }
      const argumentId = argumentsArr.join('_');
      const funcId = `${func.name}_${argumentId}`;

      if (cash[funcId]) {
        return cash[funcId];
      }
      cash[funcId] = func(...arguments);
      return cash[funcId];
    };
  }
}

const memoization = Memoization();



console.log('memoization(multiply)(1 ,2)', memoization(multiply)(1 ,2)); // вычислено
console.log('memoization(multiply)(1 ,3)', memoization(multiply)(1 ,3)); // вычислено
console.log('memoization(multiply)(1 ,2)', memoization(multiply)(1 ,2)); // взято из кеша
console.log('memoization(sum)(1 ,3, 4)', memoization(sum)(1 ,3, 4))  // вычислено
console.log('memoization(sum)(10)', memoization(sum)(10)) // вычислено
console.log('memoization(sum)(10)', memoization(sum)(10))  // взято из кеша
