export default class MaxChars {
  constructor(maximum) {
    this.maximum = maximum;
  }

  validateRule(value) {
    if (value.length > this.maximum) {
      return false;
    }

    return true;
  }

  getErrorMessage() {
    return `Must be under ${this.maximum} characters.`;
  }
}
