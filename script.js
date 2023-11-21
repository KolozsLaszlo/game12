const gameArea = document.querySelector('#gamearea')
const timerDisplay = document.querySelector('#timer')
let startTime

// Az 1-től 12-ig tartó véletlen számok generálása
const numbers = Array.from({ length: 12 }, (_, i) => i + 1)
numbers.sort(() => Math.random() - 0.5)

numbers.forEach((number) => {
  const szamDoboz = document.createElement('div')
  szamDoboz.classList.add('szamDoboz')
  szamDoboz.textContent = number

  szamDoboz.addEventListener('click', function () {
    if (!startTime) {
      startTime = Date.now()
      startTimer()
    }
    this.style.visibility = 'hidden'
  })

  gameArea.appendChild(szamDoboz)
})

function startTimer() {
  setInterval(() => {
    if (startTime) {
      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime
      timerDisplay.textContent = 'Eltelt idő: ' + formatTime(elapsedTime)
    }
  }, 1000)
}

function formatTime(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}
