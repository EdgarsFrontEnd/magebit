export default class MiscValidation {
  rules = [];

  addRule(rule) {
    this.rules.push(rule);
    return this;
  }

  validate(input) {
    for (let i = 0; i < this.rules.length; i++) {
      if (!this.rules[i].validateRule(input)) {
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
