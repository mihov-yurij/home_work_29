 import {ageClassification} from './js/ageClassification.js'; 

describe("ageClassification", function() {
  it("should return null for negative numbers", function() {
    expect(ageClassification(-1)).toBeNull();
  });
}); 
export { describe };
test ("ageClassification should return 'Дитинство' for ages 0 to 24", function() {
  expect(ageClassification(0)).toBe('Дитинство');
  expect(ageClassification(1)).toBe('Дитинство');
  expect(ageClassification(24)).toBe('Дитинство');
});
test ("ageClassification should return 'Молодість' for ages 24.01 to 44", function() {
  expect(ageClassification(24.01)).toBe('Молодість');
  expect(ageClassification(44)).toBe('Молодість');
});   
test ("ageClassification should return 'Зрілість' for ages 44.01 to 65", function() {
  expect(ageClassification(44.01)).toBe('Зрілість');
  expect(ageClassification(65)).toBe('Зрілість');
});
test ("ageClassification should return 'Старість' for ages 65.1 to 75", function() {
  expect(ageClassification(65.1)).toBe('Старість');
  expect(ageClassification(75)).toBe('Старість');
});
test ("ageClassification should return 'Довголіття' for ages 75.01 to 90", function() {
  expect(ageClassification(75.01)).toBe('Довголіття');
  expect(ageClassification(90)).toBe('Довголіття');
});
test ("ageClassification should return 'Рекорд' for ages 90.01 to 122", function() {
  expect(ageClassification(90.01)).toBe('Рекорд');
  expect(ageClassification(122)).toBe('Рекорд');
}); 
export { test };