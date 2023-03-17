console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submitted Successfully!`);
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector(`#duck-image`)

function duckMouseOver(event) {
	event.preventDefault();

	alert(`Wow! You're almost as sexy as this website!`)
}

duck.addEventListener('mouseover', duckMouseOver)