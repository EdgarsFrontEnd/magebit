export default class MinChars {
  constructor(minimum) {
    this.minimum = minimum;
  }

  validateRule(value) {
    if (value.length < this.minimum) {
      return false;
    }

    return true;
  }

  getErrorMessage() {
    return `Must be atleast ${this.minimum} characters.`;
  }
}
