/*
* 2. Итератор
Функция integers создает бесконечный итератор, который продолжает производить целые числа вечно.

Нужно создать функцию take, которая оборачивает данный итератор в другой итератор,
останавливающийся по достижении n элементов.

const iter = integers();

for (let i of take(3, iter)) {
    console.log(i)
};
// 0, 1, 2, 3
*
* */

function* integers() {
  let i = 0;
  while(i >= 0) {
    yield i;
    i += 1;
  }
}

function* take(number, iterator) {
  let currentIteration = iterator.next();
  while (currentIteration.value <= number) {
    yield currentIteration.value;
    currentIteration = iterator.next();
  }
  return currentIteration.value
}

const iter = integers();
for (let i of take(3, iter)) {
  console.log(i)
};

