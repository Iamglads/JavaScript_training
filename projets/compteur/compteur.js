let compteur = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("up")) {
      count--;
    } else if (styles.contains("down")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  })
);
