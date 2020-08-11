import { validateEmail } from './Validation';

describe('Validate Email', () => {
  test('empty case', () => {
    expect(validateEmail('')).toBeFalsy();
  });
  test('falsy case', () => {
    expect(validateEmail('test.com')).toBeFalsy();
    expect(validateEmail('test@')).toBeFalsy();
    expect(validateEmail('test@test')).toBeFalsy();
  });
  test('truthy case', () => {
    expect(validateEmail('test@test.com')).toBeTruthy();
  });
});
