const gameArea = document.querySelector("#gamearea");
for (let i = 0; i < 12; i++) {
  const szamDoboz = document.createElement("div");
  szamDoboz.innerHTML = i + 1;
  gameArea.appendChild(szamDoboz);
  szamDoboz.addEventListener("click", () => {
    szamDoboz.style.visibility = "hidden";
  });
}
