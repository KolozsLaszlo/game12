const gameArea = document.querySelector('#gamearea')

//#region ------- tömb feltöltés
let t = []
for (let i = 0; i < 12; i++) {
  t.push(i + 1)
}
//#endregion

//#region -------- keverés
for (let i = 0; i < 100; i++) {
  let pos1 = Math.floor(Math.random() * 12)
  let pos2 = Math.floor(Math.random() * 12)
  let temp = t[pos1]
  t[pos1] = t[pos2]
  t[pos2] = temp
}
//#endregion
let NextNumber = 1
//#region  ------- Számok megjelenítése
for (let i = 0; i < 12; i++) {
  const szamDoboz = document.createElement('div')
  szamDoboz.innerHTML = t[i]
  gameArea.appendChild(szamDoboz)

  szamDoboz.addEventListener('click', () => {
    szamDoboz.classList.add('rejtett')
    NextNumber++
    if (NextNumber == 13) {
      clearInterval(idozito)
    }
  })
}
//#endregion

//#region ------- stopper
const szamlalo = document.querySelector('#szamlalo')
let ido = 0
const idozito = setInterval(function () {
  szamlalo.innerHTML = ido / 10
  ido++
}, 100)
//#endregion
