/*
* 1. Асинхронщина
Реализовать добавление группы к юзерам в цикле.
(выбор как реализовать остается за вами: Promise, async/await, generators, callbacks)
начальные данные:

// коллекция юзеров. может содержать уже существующих юзеров (в базе, "есть id")
// и так же новых (без id)
const users = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'Joe'},
  {id: 3, name: 'Don', groupId: 1},
  {id: 4, name: 'Kally'},
  {name: 'Alex'},
  {name: 'John'},
];

const groups = [
  {id: 1, title: 'First Group'},
  {id: 2, title: 'Last Group'},
];
Если юзера нет в базе (без id) - создаем юзера (присваиваем случайный id)

Если у юзера уже есть группа - пропускать.

Если у юзера нет группы - добавляем id группы

после добавления группы ко всем юзерам - вывести в консоль лог обновленную коллекцию юзеров с группами.

ф-ция по созданию юзера - должна возвращать промис, время выполнения от 500мс до 1с.

ф-ция по добавлениию группы - должна возвращать промис, время выполнения от 500мс до 1с.

/**
* @param users - коллекция с юзерами
* @param group - выбранная группа (например groups[0])
* @returns {promise}
*/
// addSelectedGroupToUsers(users, group)
//  .then((res) => console.log(res);

/* Output:
[
  {id: 1, name: 'Bob', groupId: 1},
  {id: 2, name: 'Joe', groupId: 1},
  {id: 3, name: 'Don', groupId: 1},
  {id: 4, name: 'Kally', groupId: 1},
  // id для новых юзеров могут быть любыми
  {id: 5, name: 'Alex', groupId: 1},
  {id: 6, name: 'John', groupId: 1},
]
*/

const users = [
  {id: 1, name: 'Bob'},
  {id: 2, name: 'Joe'},
  {id: 3, name: 'Don', groupId: 1},
  {id: 4, name: 'Kally'},
  {name: 'Alex'},
  {name: 'John'},
];

const groups = [
  {id: 1, title: 'First Group'},
  {id: 2, title: 'Last Group'},
];

function createUser(user) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        id: +new Date(),
        ...user,
      });
    }, 1000)
  });
}

function addUserInGroup(user, group) {
  return new Promise((res, rej) => {
    setTimeout(() => {
    res({
        ...user,
      groupId: group.id,
  });
  }, 1000)
});
}

async function addSelectedGroupToUsers(users, group) {
  let promises = [];
  users.forEach(async(user) => {
    const promise = new Promise (async(res, rej) => {
      let newUser = {...user};
      if (!user.id) {
        newUser = await createUser(newUser);
      }
      if (!user.groupId) {
        newUser = await addUserInGroup(newUser, group);
      }
      res(newUser);
    });
    promises.push(promise);
  });

  return Promise.all(promises);
}


addSelectedGroupToUsers(users, groups[0])
  .then((res) => console.log(res));
