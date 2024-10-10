const hackerText = document.getElementsByClassName('hackerText');
const finalText = hackerText.textContent;
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const speed = 50; // Speed of shuffling (lower is faster)
const revealDelay = 200; // Delay before revealing each letter

console.log(finalText)

let currentIndex = 0;

function shuffleText() {
    let interval = setInterval(() => {
        let shuffledText = finalText.split('').map((char, index) => {
            if (index < currentIndex) return finalText[index];
            return characters.charAt(Math.floor(Math.random() * characters.length));
        }).join('');
        hackerText.textContent = shuffledText;
        
        if (currentIndex >= finalText.length) {
            clearInterval(interval); // Stop shuffling when all letters are revealed
        }
    }, speed);

    setTimeout(() => {
        currentIndex++;
        if (currentIndex <= finalText.length) {
            shuffleText(); // Continue to the next letter
        }
    }, revealDelay);
}

shuffleText();
