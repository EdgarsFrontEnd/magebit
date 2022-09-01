import StringValidation from "./string/stringValidation.js";
import Required from "./string/validationRules/required.js";
import ValidEmail from "./string/validationRules/validEmail.js";
import NotColombianEmail from "./string/validationRules/notColombianEmail.js";

import MiscValidation from "./miscellaneous/miscValidation.js";
import Checked from "./miscellaneous/validationRules/checked.js";

const submitButton = document.getElementById("submit");

const email = document.getElementById("email");
const terms = document.getElementById("terms");

email.addEventListener("change", validateEmail);
terms.addEventListener("change", validateTerms);

// setting validation rules for each input
function validateEmail() {
  let validation = new StringValidation();
  if (
    !validation
      .addRule(new Required("Email address"))
      .addRule(new ValidEmail())
      .addRule(new NotColombianEmail())
      .validate(email)
  ) {
    return setError(email, validation.error);
  }
  return setSuccess(email);
}

function validateTerms() {
  let validation = new MiscValidation();
  if (!validation.addRule(new Checked()).validate(terms)) {
    return setError(terms, validation.error);
  }
  return setSuccess(terms);
}

// prevent submit, if not valid
submitButton.addEventListener("click", function (event) {
  validateEmail();
  validateTerms();

  const formGroups = [...document.getElementsByClassName("form-group")];

  formGroups.forEach((e) => {
    if (e.classList.contains("error")) {
      event.preventDefault();
    }
  });
});

function setError(input, message) {
  let formGroup = input.closest(".form-group");
  let errorBox = formGroup.getElementsByClassName("error-msg")[0];

  errorBox.textContent = message;
  formGroup.classList.remove("success");
  formGroup.classList.add("error");
}

function setSuccess(input) {
  let formGroup = input.closest(".form-group");
  let errorBox = formGroup.getElementsByClassName("error-msg")[0];

  errorBox.textContent = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
}
