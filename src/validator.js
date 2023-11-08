export default class Validator {
  constructor(name) {
    this.name = name;
    this.validateUsername();
  }

  validateUsername() {
    if (/[^\w|-]/.test(this.name)) {
      throw new Error('Имя должно содержать только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
    }
    if (/\d{4}/.test(this.name)) {
      throw new Error('Имя не должно содержать подряд более трёх цифр');
    }
    if (/^-|^_|^\d|\d$|_$|-$/.test(this.name)) {
      throw new Error('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире');
    }
  }
}
