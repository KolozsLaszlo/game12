const gameArea = document.querySelector("#gamearea");
const start = document.querySelector("#start");
let t = [];
const szamlalo = document.querySelector("#szamlalo");
let ido = 0;
let idozito;
let NextNumber;

function initNumbers() {
  for (let i = 0; i < 12; i++) {
    t.push(i + 1);
  }
}

function shuffleNumbers() {
  for (let i = 0; i < 100; i++) {
    let pos1 = Math.floor(Math.random() * 12);
    let pos2 = Math.floor(Math.random() * 12);
    let temp = t[pos1];
    t[pos1] = t[pos2];
    t[pos2] = temp;
  }
}

function createBoxes() {
  for (let i = 0; i < 12; i++) {
    let szamDoboz = document.createElement("div");
    // szamDoboz.innerText = t[i]
    szamDoboz.classList.add("rejtett");
    gameArea.appendChild(szamDoboz);

    szamDoboz.addEventListener("click", function () {
      if (szamDoboz.innerText == nextNumber) {
        szamDoboz.classList.add("rejtett");
        nextNumber++;
        //itt miután rákattintunk egy számra és az eltűnik, és az volt az utolsó, akkor
        //kell megállítani a számlálót.
        //A setInterval -lal létrehozott időzítő, az időzítő azonosítójának birtokában,
        //A clearInterval paranccsal állítható le.
        if (nextNumber == 13) {
          clearInterval(idozito);
        }
      }
    });
  }
}

function fillBoxes() {
  const szamdobozok = gameArea.querySelectorAll("div");
  let i = 0;
  for (szamDoboz of szamdobozok) {
    szamDoboz.innerText = t[i];
    szamDoboz.classList.remove("rejtett");
    i++;
  }
}

function startTimer() {
  idozito = setInterval(function () {
    szamlalo.innerHTML = ido / 10;
    ido++;
  }, 100);
}

initNumbers();
createBoxes();

start.addEventListener("click", function () {
  clearInterval(idozito);
  nextNumber = 1;
  ido = 0;
  shuffleNumbers();
  fillBoxes();
  startTimer();
});
