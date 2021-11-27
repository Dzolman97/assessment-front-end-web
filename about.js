console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Submit successful, we will reach out in a few days.")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function duckComplimenter(evt) {
	evt.preventDefault()
	alert(`You have recieced an extra compliment form the duck, he says:"You're not someone I pretend to not see in public."`)
}

let img = document.getElementById('duckimg')

img.addEventListener('mouseover', duckComplimenter)