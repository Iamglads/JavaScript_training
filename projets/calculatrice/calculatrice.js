const boutons = document.querySelectorAll(".btn");
const ecran = document.querySelector(".screen");

for (let i = 0; i < boutons.length; i++) {
  boutons[i].addEventListener("click", () => {
    let number = boutons[i].getAttribute("data-num");
    ecran.value += number;
  });
}

document.querySelector(".btn-equal").addEventListener("click", () => {
  if (ecran.value === "") {
    ecran.value = 0;
  } else {
    // la fonction eval permet d'évaluer le chaine de caractere passé en argument
    let value = eval(ecran.value);
    ecran.value = value;
  }
});
// au click sur le bouton C la valeur de l'écran est vide
document.querySelector(".btn-clear").addEventListener("click", () => {
  ecran.value = "";
});
