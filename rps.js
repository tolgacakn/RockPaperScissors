class RockPaperScissors {
  constructor(User) {
    this.class = User.className;
  }

  execute() {
    this.getClass();
    this.winning();
    console.log(`class is ${this.class}`);
    console.log(`answer is ${this.answer}`);
    answer.innerHTML = this.answer;
    output.innerHTML = this.winning();
  }

  changeAnswer() {
    const random = Math.round(Math.random() * 2);
    const answers = ['rock', 'paper', 'scissors'];
    this.answer = answers[random];
    return this.answer;
  }

  getClass() {
    this.changeAnswer();
    return this.class;
  }
  winning() {
    if (this.class == this.answer) {
      return 'its a tie';
    } else if (this.class == 'rock' && this.answer == 'scissors') {
      return `${this.class} beats ${this.answer}, YOU WON`;
    } else if (this.class == 'scissors' && this.answer == 'rock') {
      return `${this.answer} beats ${this.class}, YOU LOST`;
    } else if (this.class == 'scissors' && this.answer == 'paper') {
      return `${this.class} beats ${this.answer}, YOU WON`;
    } else if (this.class == 'paper' && this.answer == 'scissors') {
      return `${this.answer} beats ${this.class}, YOU LOST`;
    } else if (this.class == 'paper' && this.answer == 'rock') {
      return `${this.class} beats ${this.answer}, YOU WON`;
    } else if (this.class == 'rock' && this.answer == 'paper') {
      return `${this.answer} beats ${this.class}, YOU LOST`;
    }
  }
}
function upperText() {
  setTimeout(function () {
    x.innerHTML = 'ROCK';
  }, 300);
  setTimeout(function () {
    y.innerHTML = 'PAPER';
  }, 600);
  setTimeout(function () {
    z.innerHTML = 'SCISSORS';
  }, 900);
  setTimeout(function () {
    shoot.innerHTML = 'SHOOT';
  }, 1200);
}

var answer = document.querySelector('h2');
var rock = document.querySelector('.rock');
var paper = document.querySelector('.paper');
var scissors = document.querySelector('.scissors');
var output = document.querySelector('.winS');
var x = document.querySelector('.x');
var y = document.querySelector('.y');
var z = document.querySelector('.z');
var shoot = document.querySelector('.shoot');
const Rock = new RockPaperScissors(rock);
const Paper = new RockPaperScissors(paper);
const Scissors = new RockPaperScissors(scissors);

rock.addEventListener('click', function () {
  upperText();
  setTimeout(function () {
    Rock.execute();
  }, 1700);
});
paper.addEventListener('click', function () {
  upperText();
  setTimeout(function () {
    Paper.execute();
  }, 1700);
});
scissors.addEventListener('click', function () {
  upperText();
  setTimeout(function () {
    Scissors.execute();
  }, 1700);
});
