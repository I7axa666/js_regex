import Validator from '../validator';

test('сreating validator', () => {
  const validator = new Validator('Bob');
  expect(validator).toBeInstanceOf(Validator);
});

test('validator error name contains more 3 digits ', () => {
  expect(() => {
    new Validator('Bob7777Son');
  }).toThrow(new Error('Имя не должно содержать подряд более трёх цифр'));
});

test('validator error name contains othe symbols ', () => {
  expect(() => {
    new Validator('Bo$');
  }).toThrow(new Error('Имя должно содержать только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)'));
});

test('validator error name begins or ends _, -, 0-9', () => {
  expect(() => {
    new Validator('BoB777');
  }).toThrow(new Error('Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире'));
});
