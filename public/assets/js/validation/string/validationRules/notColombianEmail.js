export default class NotColombianEmail {
  validateRule(value) {
    if (value.toLowerCase().endsWith("co")) {
      return false;
    }

    return true;
  }

  getErrorMessage() {
    return "We are not accepting subscriptions from Colombia emails.";
  }
}
