console.log(`Hello World!`)

let colorBtn = document.querySelector(`#color`)

function favoriteColor(event) {
	event.preventDefault();

	alert(`My favorite color is green!`)
}

colorBtn.addEventListener('click', favoriteColor)

let placeBtn = document.querySelector(`#place`)

function favoritePlace(event) {
	event.preventDefault();

	alert(`My favorite place is Sundance!`)
}

placeBtn.addEventListener('click', favoritePlace)

let ritualBtn = document.querySelector(`#ritual`)

function favoriteRitual(event) {
	event.preventDefault();

	alert(`My favorite ritual is meditation!`)
}

ritualBtn.addEventListener('click', favoriteRitual)

