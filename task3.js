/*
* Cоздать классы Monster и Gladiator, оба наследуются от базового класса Warior
у них есть свои имена, тип атаки и HP.
у каждого есть методы атаки.
Атака - рандомное значение после каждого удара, например от 1 до 10.
Создать класс Game где реализовать метод start(), который выполняет бой между бойцами
После боя в консоль вывести имя того, кто победил
*/
// const gladiator = new Gladiator(/*some aruments*/);
// const monster = new Monster(/*some aruments*/);
//const game = new Game(gladiator, monster);

// game.start();
// console.log(game.winner); // имя победителя.

class Warior {
  constructor({ name, hp}) {
    this.name = name;
    this.hp = hp;
  }

  attack() {
    return Math.floor(Math.random() * 10) + 1; // from 1 to 10
  }
}

class Monster extends Warior {
  constructor(props) {
    super(props);
    switch(props.attackType) {
      case Monster.attackTypes().claws:
        this.attackType = Monster.attackTypes().claws;
        break;
      case Monster.attackTypes().bite:
      default:
        this.attackType = Monster.attackTypes().bite;
        break;
    }
  }

  static attackTypes() {
    return {
      claws: 'claws',
      bite: 'bite',
    }
  }

  claws() {
    return Math.floor(Math.random() * 10) + 1; // from 1 to 10
  }

  bite() {
    return Math.floor(Math.random() * 10) + 1; // from 1 to 10
  }

  attack() {
    return this[this.attackType]();
  }
}

class Gladiator extends Warior {
  constructor(props) {
    super(props);
    switch(props.attackType) {
      case Gladiator.attackTypes().bow:
        this.attackType = Gladiator.attackTypes().bow;
        break;
      case Gladiator.attackTypes().sword:
      default:
        this.attackType = Gladiator.attackTypes().sword;
        break;
    }
  }

  static attackTypes() {
    return {
      bow: 'bow',
      sword: 'sword',
    }
  }

  sword() {
    return Math.floor(Math.random() * 10) + 1; // from 1 to 10
  }

  bow() {
    return Math.floor(Math.random() * 10) + 1; // from 1 to 10
  }

  attack() {
    return this[this.attackType]();
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.winner = 'Please start the game';
  }

  start() {
    let attackPlayer = this.player1;
    let defencePlayer = this.player2;
    while(attackPlayer.hp > 0) {

      const damage = attackPlayer.attack();
      defencePlayer.hp = defencePlayer.hp - damage;
      // console.log('logs', `Attack: ${attackPlayer.name} ${attackPlayer.hp} Defence: ${defencePlayer.name} ${defencePlayer.hp} Type: ${attackPlayer.attackType} Damage: ${damage}`);
      [attackPlayer, defencePlayer] = [defencePlayer, attackPlayer];
    }
    this.winner = defencePlayer.name;
  }
}

const monster = new Monster({
  name: 'Goblin',
  hp: 100,
  attackType: 'bite',
});

const gladiator = new Gladiator({
  name: 'Maximus',
  hp: 100,
  attackType: 'sword',
});

const game = new Game(gladiator, monster);

game.start();
console.log(game.winner); // имя победителя.
