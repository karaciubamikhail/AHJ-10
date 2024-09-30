import { validateInput } from "../validate";


test('Coords OK with space', () => {
    const input = '-89.132, 179.123';
    const expected = { latitude: -89.132, longitude: 179.123 };
    expect(validateInput(input)).toEqual(expected);
  });
  test('Coords OK with space and brackets', () => {
    const input = '[89.132, -179.123]';
    const expected = { latitude: 89.132, longitude: -179.123 };
    expect(validateInput(input)).toEqual(expected);
  });
  
  test('Coords OK without space', () => {
    const input = '[0.132,1.123]';
    const expected = { latitude: 0.132, longitude: 1.123 };
    expect(validateInput(input)).toEqual(expected);
  });
  
  test('Coords OK without space and brackets', () => {
    const input = '0,0';
    const expected = { latitude: 0, longitude: 0 };
    expect(validateInput(input)).toEqual(expected);
  });
  
  test('Coords not OK with space', () => {
    const input = '-91, 181';
    const expected = false;
    expect(validateInput(input)).toEqual(expected);
  });
  
  test('Coords not OK with space and brackets', () => {
    const input = '[91, -181]';
    const expected = false;
    expect(validateInput(input)).toEqual(expected);
  });