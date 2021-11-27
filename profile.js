let colorBtn = document.getElementById('color')

function favColorAlert(event) {
   event.preventDefault()
   alert("My favorite color is Teal Blue. Check the button out!")
   colorBtn.style.background='#477890'
}

let favColorBtn = document.getElementById('color')
favColorBtn.addEventListener('click', favColorAlert)

function favPlaceAlert(event) {
   event.preventDefault()
   alert("My favorite place to go is the Beach, andy beach, anywhere. Sand, water, waves. That is what I love.")
}

let favPlaceBtn = document.getElementById('place')
favPlaceBtn.addEventListener('click', favPlaceAlert)

function favRitualAlert(event) {
   event.preventDefault()
   alert("My favorite ritual that I do, helps me get awake in the morning, at the end of a regular shower, I turn the water to freezing cold, and use a breathing method called Wim Hof for a few minutes.")
}

let favRitualBtn = document.getElementById('ritual')
favRitualBtn.addEventListener('click', favRitualAlert)