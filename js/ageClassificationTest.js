 import {ageClassificationTest } from './js/ageClassification.js'; 

describe("ageClassification", function() {
  it("should return null for negative numbers", function() {
    expect(ageClassification(-1)).toBeNull();
  });
}); 
export { describe };