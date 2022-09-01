export default class Checked {
  validateRule(input) {
    return input.checked;
  }

  getErrorMessage() {
    return "You must accept the terms and conditions";
  }
}
