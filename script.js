const gameArea = document.querySelector("#gamearea");

let t = [];

for (let i = 0; i < 100; i++) {
  let pos1 = Math.floor(Math.random() * 12);
  let pos2 = Math.floor(Math.random() * 12);
  t[i] = [pos1];
  pos1[i] = [pos2];
  pos2[i] = t;
}

for (let i = 0; i < 12; i++) {
  const szamDoboz = document.createElement("div");
  szamDoboz.innerHTML = t[i];
  gameArea.appendChild(szamDoboz);
  szamDoboz.addEventListener("click", () => {
    szamDoboz.style.visibility = "hidden";
  });
}
