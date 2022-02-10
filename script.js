const bttn = document.querySelector('button');

bttn.addEventListener('click', () => {
    createGato();
    coolName();
});


function createGato() {

    const gatoDiv = document.querySelector('.gatoDiv');

    // If an image was already requested, clear the div first
    if (gatoDiv.hasChildNodes()){
        gatoDiv.innerHTML = '';
    }

    // API Request
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())    // Return as a JSON file
    .then(data => {
        let gatoUrl = data[0].url;
        let gatoImago = document.createElement("img")   // Create an img element
        gatoImago.setAttribute('src', `${gatoUrl}`)     // Set its src attribute to the API request
        gatoDiv.appendChild(gatoImago);
    });
};


function coolName() {

    const nome = document.querySelector('.nome');

    fetch('https://api.scryfall.com/cards/random?q=is%3Acommander')
    .then(res => res.json())
    .then(data => {
        nome.innerText = `Hi! My name is ${data.name}`;   // Sets a random name as text
    });

};