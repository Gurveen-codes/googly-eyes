//Pupils
let pupils = document.getElementsByClassName('pupil')
let pupilArr = Array.from(pupils)
let pupilsStart = -60
let pupilsRange = 120

//mouse x position
let mouseXStart = 0
let mouseXEnd = window.innerWidth
let mouseXRange = mouseXEnd - mouseXStart
let mouseXCurrent = 0
let fracX = 0

//mouse Y position
let mouseYStart = 0
let mouseYEnd = window.innerHeight
let mouseYRange = mouseYEnd - mouseYStart
let mouseYCurrent = 0
let fracY = 0

window.addEventListener('mousemove', (event) => {
	mouseXCurrent = event.clientX
	fracX = mouseXCurrent / mouseXRange

	mouseYCurrent = event.clientY
	fracY = mouseYCurrent / mouseYRange

	let pupilCurrentX = pupilsStart + fracX * pupilsRange
	let pupilCurrentY = pupilsStart + fracY * pupilsRange

	pupilArr.forEach((currPupil) => {
		currPupil.style.transform = `translate(${pupilCurrentX}px, ${pupilCurrentY}px)`
	})
})

window.addEventListener('resize', (event) => {
	mouseXEnd = window.innerWidth
	mouseXRange = mouseXEnd - mouseXStart

	mouseYEnd = window.innerHeight
	mouseYRange = mouseYEnd - mouseYStart
})
