var buttonPressRain = new Audio('./sounds/Chuva.wav')
var buttonPressFlorest = new Audio('./sounds/Floresta.wav')
var buttonPressCoffeShop = new Audio('./sounds/Cafeteria.wav')
var buttonPressFireplace = new Audio('./sounds/Lareira.wav')
let buttonPlay = document.querySelector('.play')
let buttonStop = document.querySelector('.stop')
let buttonSetUp = document.querySelector('.setUp')
let buttonSetDown = document.querySelector('.setDown')
let buttonRain = document.querySelector('.rain')
let buttonRainClick = document.querySelector('.rainClick')
let buttonFlorest = document.querySelector('.florest')
let buttonFlorestClick = document.querySelector('.florestClick')
let buttonCoffeShop = document.querySelector('.coffeShop')
let buttonCoffeShopClick = document.querySelector('.coffeShopClick')
let buttonFireplace = document.querySelector('.fireplace')
let buttonFireplaceClick = document.querySelector('.fireplaceClick')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = 25
let seconds
let time
buttonPressRain.loop = true
buttonPressFlorest.loop = true
buttonPressCoffeShop.loop = true
buttonPressFireplace.loop = true

function PressRain() {
  buttonPressRain.play()
}
function PressRainClick() {
  buttonPressRain.pause()
}
function PressFlorest() {
  buttonPressFlorest.play()
}
function PressFlorestClick() {
  buttonPressFlorest.pause()
}
function PressCoffeShop() {
  buttonPressCoffeShop.play()
}
function PressCoffeShopClick() {
  buttonPressCoffeShop.pause()
}
function PressFireplace() {
  buttonPressFireplace.play()
}
function PressFireplaceClick() {
  buttonPressFireplace.pause()
}

buttonRain.addEventListener('click', function () {
  buttonRain.classList.add('hide')
  buttonRainClick.classList.remove('hide')
  PressRain()
})
buttonRainClick.addEventListener('click', function () {
  buttonRain.classList.remove('hide')
  buttonRainClick.classList.add('hide')
  PressRainClick()
})
buttonFlorest.addEventListener('click', function () {
  buttonFlorest.classList.add('hide')
  buttonFlorestClick.classList.remove('hide')
  PressFlorest()
})
buttonFlorestClick.addEventListener('click', function () {
  buttonFlorest.classList.remove('hide')
  buttonFlorestClick.classList.add('hide')
  PressFlorestClick()
})
buttonCoffeShop.addEventListener('click', function () {
  buttonCoffeShop.classList.add('hide')
  buttonCoffeShopClick.classList.remove('hide')
  PressCoffeShop()
})
buttonCoffeShopClick.addEventListener('click', function () {
  buttonCoffeShop.classList.remove('hide')
  buttonCoffeShopClick.classList.add('hide')
  PressCoffeShopClick()
})
buttonFireplace.addEventListener('click', function () {
  buttonFireplace.classList.add('hide')
  buttonFireplaceClick.classList.remove('hide')
  PressFireplace()
})
buttonFireplaceClick.addEventListener('click', function () {
  buttonFireplace.classList.remove('hide')
  buttonFireplaceClick.classList.add('hide')
  PressFireplaceClick()
})
buttonSetUp.addEventListener('click', function () {
  minutes = minutes + 5
  minutesDisplay.textContent = minutes
})
buttonSetDown.addEventListener('click', function () {
  minutes = minutes - 5
  minutesDisplay.textContent = minutes
})

buttonStop.addEventListener('click', function () {
  minutes
  minutesDisplay.textContent = minutes
  seconds = '00'
  secondsDisplay.textContent = seconds

  clearTimeout(time)
})

function countdown() {
  time = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)
    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
    }

    secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')

    if (minutes <= 0) {
      seconds = '00'
      secondsDisplay.textContent = seconds
      return
    }

    countdown()
  }, 1000)
}
buttonPlay.addEventListener('click', function () {
  countdown()
})
