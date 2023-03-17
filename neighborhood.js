console.log(`Hello World`)

const restaurants = [`Asado`, `Sushi Ya`]

const randomButton = document.querySelector('#randomBtn')

const chooseRandom = (event) => {
    event.preventDefault();
    alert(restaurants[Math.round(Math.random(restaurants))]);
}

randomButton.addEventListener('click', chooseRandom)