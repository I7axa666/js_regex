import validateUsername from './functValidate';

export default class Validator {
  constructor(name) {
    if (validateUsername(name)) {
      this.name = name;
    } else {
      this.name = null;
    }
  }
}
