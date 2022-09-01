export default class Required {
  constructor(entity) {
    this.entity = entity;
  }

  validateRule(value) {
    if (!value) {
      return false;
    }

    return true;
  }

  getErrorMessage() {
    return `${this.entity} is required`;
  }
}
