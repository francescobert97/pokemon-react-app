import capitalizeString from "./capitalizeString";

test('capitalizeString capitalizes the first letter of a string', () => {
    const result = capitalizeString('hello');
    expect(result).toBe('Hello');
  });
  
  test('capitalizeString works with an empty string', () => {
    const result = capitalizeString('');
    expect(result).toBe('');
  });
  
  test('capitalizeString works with already capitalized string', () => {
    const result = capitalizeString('World');
    expect(result).toBe('World');
  });
  
  test('capitalizeString works with a single character', () => {
    const result = capitalizeString('a');
    expect(result).toBe('A');
  });