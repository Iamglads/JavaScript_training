// modal form
const formSubmit = document.querySelector(".form-submit");

class ValidateForm {
  constructor() {
    this.firstname = formSubmit.first;
    this.lastname = formSubmit.last;
    this.email = formSubmit.email;
    this.birthdate = formSubmit.birthdate;
    this.quantity = formSubmit.quantity;
    this.nextEvent = formSubmit.checkbox2;
    this.terms = formSubmit.checkbox1;
  }

  checkInputs() {
    this.checkName(this.firstname);
    this.checkName(this.lastname);
    this.checkEmail();
    this.checkBirthdate();
    this.checkQuantity();
    this.checkTerms();
    this.checkCity();

    if (
      this.checkName(this.firstname) &&
      this.checkName(this.lastname) &&
      this.checkEmail() &&
      this.checkQuantity() &&
      this.checkBirthdate() &&
      this.checkCity() &&
      this.checkTerms()
    ) {
      this.sendData();
    } else {
      console.log("Données non valides");
    }
  }

  checkName(input) {
    let textRegex = /^([A-Z À-Ÿa-z-0-9']{2,20})$/;
    let testText = textRegex.test(input.value);
    //console.log(testText);
    const inputValue = input.value.trim();
    if (inputValue === "") {
      this.showError(input, "Ce champs est requis");
    } else if (inputValue.length < 2) {
      this.showError(input, "Veuillez entrer deux caractères minimum!");
    } else if (!testText) {
      this.showError(input, "Champs non valid!");
    } else {
      this.showSuccess(input);
      return true;
    }
  }

  checkEmail() {
    const emailValue = this.email.value.trim();
    let emailRegExp = new RegExp(
      "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
      "g"
    );
    let testEmail = emailRegExp.test(emailValue);
    //console.log(testEmail)

    if (emailValue === "") {
      this.showError(this.email, "Veuillez renseigner votre e-mail");
      // vérifier si l'email est correct
    } else if (testEmail) {
      //console.log(testEmail)
      this.showSuccess(this.email);
      return true;
    } else {
      this.showError(this.email, "Veuillez saisir un e-mail valide!");
    }
  }

  //
  checkBirthdate() {
    const birthdateValue = this.birthdate.value;
    const birthdateRegExp =
      /^((19[3-9]+[0-9]|200[0-9])-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])|(0?[1-9]|[12]\d|3[01])[/](0?[1-9]|1[0-2])[/](19[3-9]+[0-9]|200[0-6]))$/;
    let test = birthdateRegExp.test(birthdateValue);
    if (birthdateValue == "") {
      this.showError(
        this.birthdate,
        "Veuillez indiquer votre date de naissance!"
      );
    } else if (!test) {
      this.showError(
        this.birthdate,
        "Votre date de naissance n'est pas valid!"
      );
    } else {
      this.showSuccess(this.birthdate);
      return true;
    }
  }

  checkQuantity() {
    const quantityValue = this.quantity.value;
    if (quantityValue == "") {
      this.showError(this.quantity, "Veuillez répondre à cette question!");
    } else if (parseInt(quantityValue) > 99) {
      this.showError(
        this.quantity,
        "Vous êtes un sacré menteur! Veuillez donner une réponse correcte!."
      );
    } else {
      this.showSuccess(this.quantity);
      return true;
    }
  }

  checkTerms() {
    const feedbackTerms = document.querySelector(".feedbackTerms");
    console.log(this.terms);
    if (!this.terms.checked) {
      feedbackTerms.textContent =
        "Vous devez accepter les conditions d'utilisations!";
      feedbackTerms.classList.add("errors");
      console.log("Terms not accepted!");
    } else {
      console.log("Terms accepted!");
      feedbackTerms.textContent = " ";
      return true;
    }
  }

  nextEventMethod() {
    if (!this.nextEvent.checked) {
      return false;
    } else return true;
  }

  checkCity() {
    let city = formSubmit.location;
    const addCity = document.querySelector(".add-city");
    for (let i = 0; i < city.length; i++) {
      if (!city[i].checked) {
        addCity.textContent = "Vous devez choisir une ville!";
        addCity.classList.add("errors");
      } else {
        addCity.textContent = "";
        return city[i].value;
      }
    }
  }

  // show border style green when input is correct
  showSuccess(input) {
    let feedback = input.nextElementSibling;
    feedback.textContent = "";
    input.classList.remove("errors");
    input.classList.add("success");
  }

  // display errors and give informations about theses
  showError(input, message) {
    let feedback = input.nextElementSibling;
    //console.log(feedback)
    feedback.innerHTML = message;
    feedback.classList.remove("success");
    feedback.classList.add("errors");
    input.classList.remove("success");
    input.classList.add("errors-input");
  }

  // collect datas from all inputs and send them in the console & and display a success delivery
  sendData() {
    const datas = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      birthdate: this.birthdate.value,
      quantity: this.quantity.value,
      city: this.checkCity(),
      termsAccepted: true,
      nextEvent: this.nextEventMethod(),
    };
    console.log(datas);

    // envoyer le message dans la modal et cacher le formulaire
    const successMessage = document.querySelector(".successMessage");
    const boxMessage = document.querySelector(".susses-message");
    const message = `Merci ${this.firstname.value} ${this.lastname.value}! Votre réservation a été reçue!`;

    successMessage.textContent = message;
    successMessage.style.fontSize = "40px";
    successMessage.style.textAlign = "center";
    formSubmit.style.display = "none";
    boxMessage.style.display = "block";
  }
}

formSubmit.addEventListener("submit", (e) => {
  const validate = new ValidateForm();
  console.log("Submit");
  e.preventDefault();
  validate.checkInputs();
});
