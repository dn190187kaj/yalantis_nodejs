/*
3. Переписать ф-цию memoization (из задания к прошлому уроку) используюя ES6 features
*/

const multiply = (x, y) => {
  console.log('count');
  return x * y;
}

const sum = (...numbers) => {
  let sum = 0;
  if (numbers.length > 0) {
    for (let index in numbers) {
      const argument = numbers[index];
      sum += argument;
    }
  }
  console.log('count');
  return sum;
}

const Memoization = () => {
  const cash = {};
  return (func) => (...params) => {
    // create arguments id
    const argumentId = params.join('_');
    const funcId = `${func.name}_${argumentId}`;

    if (cash[funcId]) {
      return cash[funcId];
    }
    cash[funcId] = func(...params);
    return cash[funcId];
  };
}

const memoization = Memoization();



console.log('memoization(multiply)(1 ,2)', memoization(multiply)(1 ,2)); // вычислено
console.log('memoization(multiply)(1 ,3)', memoization(multiply)(1 ,3)); // вычислено
console.log('memoization(multiply)(1 ,2)', memoization(multiply)(1 ,2)); // взято из кеша
console.log('memoization(sum)(1, 3, 4)', memoization(sum)(1 ,3, 4))  // вычислено
console.log('memoization(sum)(10)', memoization(sum)(10)) // вычислено
console.log('memoization(sum)(10)', memoization(sum)(10))  // взято из кеша
