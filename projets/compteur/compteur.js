let compteur = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const current = e.currentTarget.classList;
    if (current.contains("down")) {
      compteur--;
    } else if (current.contains("up")) {
      compteur++;
    } else {
      compteur = 0;
    }

    if (compteur > 0) {
      value.style.color = "green";
    }
    if (compteur < 0) {
      value.style.color = "red";
    }
    if (compteur === 0) {
      value.style.color = "#222";
    }
    value.textContent = compteur;
  })
);
