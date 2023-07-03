const bus = document.getElementById('bus') //get item by class bus
const vape = document.querySelector('.vape')
let busLeft = parseInt(window.getComputedStyle(bus).getPropertyValue('left')) //get bus left property
let busBottom = parseInt(
  window.getComputedStyle(bus).getPropertyValue('bottom')
) // get bus right property
let missed = 3
function updatedMissed(missed) {
  const missedScore = document.getElementById('missed-score')
  missedScore.innerHTML = `${missed}`
}

function moveBusRight() {
  busLeft += 15
  bus.style.left = busLeft + 'px'
} // move bus left and limit to screen edge

function moveBusLeft() {
  busLeft -= 15
  bus.style.left = busLeft + 'px'
} //move bus right and limit to screen edge

function control(e) {
  if (e.key == 'ArrowLeft') moveBusLeft()
  if (e.key == 'ArrowRight') moveBusRight()
} //control bus with keys

function createVapes() {
  let vapeBottom = 470
  let vapeLeft = Math.floor(Math.random() * 620)
  let vapes = document.createElement('img')
  vapes.setAttribute('id', 'vape')
  vapes.setAttribute('src', '/images/vape-purple.png')
  vape.appendChild(vapes)
  function vapeFall() {
    if (vapeBottom == busBottom) {
      missed++
      updatedMissed(missed)
    }
    console.log(missed)
    vapeBottom -= 5
    vapes.style.bottom = vapeBottom + 'px'
    vapes.style.left = vapeLeft + 'px'
  }
  setInterval(vapeFall, 20)
  setTimeout(createVapes, 2000)
}

createVapes()

document.addEventListener('keydown', control) //keydown event listener

//create random vape document.createElement
//create pipe document.createElement

//func make vapes/pipes fall
