class RockPaperScissors {
	constructor(User) {
		this.class = User.className;
		computerPoints = 0;
		playerPoints = 0;
	}

	execute() {
		this.getClass();
		this.winning();
		answer.innerHTML = this.answer;
		output.innerHTML = this.winning();
		this.updateScoreBoard();
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
			playerPoints++;
			return `${this.class} beats ${this.answer}, YOU WON`;
		} else if (this.class == 'scissors' && this.answer == 'rock') {
			computerPoints++;
			return `${this.answer} beats ${this.class}, YOU LOST`;
		} else if (this.class == 'scissors' && this.answer == 'paper') {
			playerPoints++;
			return `${this.class} beats ${this.answer}, YOU WON`;
		} else if (this.class == 'paper' && this.answer == 'scissors') {
			computerPoints++;
			return `${this.answer} beats ${this.class}, YOU LOST`;
		} else if (this.class == 'paper' && this.answer == 'rock') {
			playerPoints++;
			return `${this.class} beats ${this.answer}, YOU WON`;
		} else if (this.class == 'rock' && this.answer == 'paper') {
			computerPoints++;
			return `${this.answer} beats ${this.class}, YOU LOST`;
		}
	}
	updateScoreBoard() {
		point.innerHTML = `${computerPoints / 2} - ${playerPoints / 2}`;
	}
}

function upperText() {
	answer.innerHTML = '';
	output.innerHTML = '';
	x.innerHTML = '';
	y.innerHTML = '';
	z.innerHTML = '';
	shoot.innerHTML = '';

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
var point = document.querySelector('.points');
var computerPoints = 0;
var playerPoints = 0;
const reset = document.querySelector('.reset');

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
reset.addEventListener('click', () => {
	location.reload();
});
