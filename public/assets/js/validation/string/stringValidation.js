export default class StringValidation {
  rules = [];

  addRule(rule) {
    this.rules.push(rule);
    return this;
  }

  validate(input) {
    // remove spaces and backslashes
    let value = input.value ? input.value.trim().replaceAll("\\", "") : "";
    input.value = value;

    for (let i = 0; i < this.rules.length; i++) {
      if (!this.rules[i].validateRule(value)) {
        this.error = this.rules[i].getErrorMessage();

        return false;
      }
    }

    return true;
  }

  getError() {
    return this.error;
  }
}
