// script.js

// Event listener for the Start button on the first page
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const userInput = document.getElementById('userinput');

    if (startButton) {
        startButton.addEventListener('click', () => {
            const userName = userInput.value.trim();
            if (userName) {
                localStorage.setItem('userName', userName);
            }
            window.location.href = './index2.html'; // Redirect to the second page
        });
    }

    // On the second page, update the welcome message with the user's name
    const welcomeMessage = document.getElementById('welcomeMessage');
    if (welcomeMessage) {
        const storedUserName = localStorage.getItem('userName') || 'User';
        welcomeMessage.textContent = `Welcome, ${storedUserName}`;
    }
});


    // JavaScript code for the guessing game
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    const maxAttempts = 3;

    const guessButton = document.getElementById('btn');
    const outputText = document.getElementById('outputtext');
    const numberInput = document.getElementById('userInput');

    if (guessButton) {
        guessButton.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default action of the button

            // Validate input
            const userGuess = parseInt(numberInput.value, 10);
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                outputText.textContent = "Please enter a valid number between 1 and 100";
                outputText.style.color = 'red';
                return;
            }

            attempts++;

            if (attempts <= maxAttempts) {
                if (userGuess === randomNumber) {
                    outputText.textContent = "Congratulations! You guessed the correct number!";
                    outputText.style.color = 'green';
                    numberInput.disabled = true;
                    guessButton.disabled = true;
                } else if (userGuess < randomNumber) {
                    outputText.textContent = "Too low! Try again.";
                    outputText.style.color = 'orange';
                } else if (userGuess > randomNumber) {
                    outputText.textContent = "Too high! Try again.";
                    outputText.style.color = 'orange';
                }
            }

            if (attempts === maxAttempts && userGuess !== randomNumber) {
                outputText.textContent = `GAME OVER! You've used all your attempts. The number was ${randomNumber}.`;
                outputText.style.color = 'red';
                numberInput.disabled = true;
                guessButton.disabled = true;
            }
        });
    }


