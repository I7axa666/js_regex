import Validator from '../classValidator';

test('validator error', () => {
  expect(new Validator('Bob77Son').name).toBe('Bob77Son');
});

test('validator error 4 dates', () => {
  expect(new Validator('Bob7777Son').name).toBeNull();
});

test('validator error start with -', () => {
  expect(new Validator('-Bob').name).toBeNull();
});
