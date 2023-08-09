// Get elements
const enterButton = document.getElementById('enterButton');
const hauntedHouse = document.getElementById('hauntedHouse');

// Event listener for enter button
enterButton.addEventListener('click', enterScaryRoom);

// Scary room function
function enterScaryRoom() {
    hauntedHouse.src = 'https://i.ibb.co/t8RT60H/md-ebb42c5c23d5-jump-scare-feat.jpg';
    enterButton.textContent = 'Run Away!';
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#ff9900';
}






// Update this in your existing JavaScript
setTimeout(() => {
    enterButton.classList.remove('moving');
}, 500); // Change this to match the new transition duration




// new

// Toggle the "flashing" class on the body
    document.body.classList.toggle('flashing');

    // ...


