const ageClassification = require('../ageClassification');

describe('ageClassification()', () => {

  test('returns null for negative age', () => {
    expect(ageClassification(-5)).toBe(null);
  });

  describe('Childhood', () => {
    test('0 age', () => {
      expect(ageClassification(0)).toBe('Дитинство');
    });

    test('boundary 24', () => {
      expect(ageClassification(24)).toBe('Дитинство');
    });
  });

  describe('Youth', () => {
    test('boundary 25', () => {
      expect(ageClassification(25)).toBe('Молодість');
    });

    test('boundary 44', () => {
      expect(ageClassification(44)).toBe('Молодість');
    });
  });

  describe('Maturity', () => {
    test('boundary 45', () => {
      expect(ageClassification(45)).toBe('Зрілість');
    });

    test('boundary 65', () => {
      expect(ageClassification(65)).toBe('Зрілість');
    });
  });

  describe('Old age', () => {
    test('boundary 66', () => {
      expect(ageClassification(66)).toBe('Старість');
    });

    test('boundary 75', () => {
      expect(ageClassification(75)).toBe('Старість');
    });
  });

  describe('Longevity', () => {
    test('boundary 76', () => {
      expect(ageClassification(76)).toBe('Довголіття');
    });

    test('boundary 90', () => {
      expect(ageClassification(90)).toBe('Довголіття');
    });
  });

  describe('Record age', () => {
    test('boundary 91', () => {
      expect(ageClassification(91)).toBe('Рекорд');
    });

    test('boundary 122', () => {
      expect(ageClassification(122)).toBe('Рекорд');
    });
  });

  test('returns null for age greater than 122', () => {
    expect(ageClassification(123)).toBe(null);
  });

});


module.exports = ageClassification;