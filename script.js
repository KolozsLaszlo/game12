const gameArea = document.querySelector("#gamearea");
for (let i = 0; i < 12; i++) {
  const szamDoboz = document.createElement("div");
  szamDoboz.innerHTML = "A";
  gameArea.appendChild(szamDoboz);
}
