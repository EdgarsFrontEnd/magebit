export default class ValidEmail {
  validateRule(value) {
    if (
      !value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return false;
    }

    return true;
  }

  getErrorMessage() {
    return "Email address not valid";
  }
}
