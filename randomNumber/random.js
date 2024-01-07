const prompt = require('prompt-sync')()

const target = Math.round(Math.random() * 100)

let guesses = 0

//looping through the guesses untill it's been guessed correctly.
while (true) {
    // checking the number of guesses.
	guesses++
	const guess = Number(prompt('Guess the number (0-100): '))

	//checking the guess is greater or lesser than the expected target

	if (guess > target) {
		consol.log('Your guess is too high!')
	} else if (guess < target) {
		console.log('Your guess is too low!')
	} else {
		console.log('You guessed it!')
		break
	}
}

console.log('You guessed the munber in', guesses, 'trials!')
