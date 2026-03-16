const ageClassification = require('./ageClassification');

describe('ageClassification function', () => {

  test('negative number returns null', () => {
    expect(ageClassification(-1)).toBe(null);
  });

  test('childhood range', () => {
    expect(ageClassification(0)).toBe('Дитинство');
    expect(ageClassification(10)).toBe('Дитинство');
    expect(ageClassification(24)).toBe('Дитинство');
  });

  test('youth range', () => {
    expect(ageClassification(25)).toBe('Молодість');
    expect(ageClassification(30)).toBe('Молодість');
    expect(ageClassification(44)).toBe('Молодість');
  });

  test('maturity range', () => {
    expect(ageClassification(45)).toBe('Зрілість');
    expect(ageClassification(60)).toBe('Зрілість');
    expect(ageClassification(65)).toBe('Зрілість');
  });

  test('old age range', () => {
    expect(ageClassification(66)).toBe('Старість');
    expect(ageClassification(70)).toBe('Старість');
    expect(ageClassification(75)).toBe('Старість');
  });

  test('longevity range', () => {
    expect(ageClassification(76)).toBe('Довголіття');
    expect(ageClassification(85)).toBe('Довголіття');
    expect(ageClassification(90)).toBe('Довголіття');
  });

  test('record age range', () => {
    expect(ageClassification(91)).toBe('Рекорд');
    expect(ageClassification(110)).toBe('Рекорд');
    expect(ageClassification(122)).toBe('Рекорд');
  });

  test('age greater than 122 returns null', () => {
    expect(ageClassification(123)).toBe(null);
  });

});

test('ageClassification function', () => {
  expect(ageClassification(0)).toBe('Дитинство');
  expect(ageClassification(24)).toBe('Дитинство');
  expect(ageClassification(44)).toBe('Молодість');
  expect(ageClassification(65)).toBe('Зрілість');
  expect(ageClassification(75)).toBe('Старість');
  expect(ageClassification(90)).toBe('Довголіття');
  expect(ageClassification(122)).toBe('Рекорд');
});
export { describe, test };