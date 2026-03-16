const weekFn = require('./weekFn.js');

describe('weekFn()', () => {

  test('1 → Понеділок', () => {
    expect(weekFn(1)).toBe('Понеділок')
  })

  test('2 → Вівторок', () => {
    expect(weekFn(2)).toBe('Вівторок')
  })

  test('3 → Середа', () => {
    expect(weekFn(3)).toBe('Середа')
  })

  test('4 → Четвер', () => {
    expect(weekFn(4)).toBe('Четвер')
  })

  test('5 → П\'ятниця', () => {
    expect(weekFn(5)).toBe("П'ятниця")
  })

  test('6 → Субота', () => {
    expect(weekFn(6)).toBe('Субота')
  })

  test('7 → Неділя', () => {
    expect(weekFn(7)).toBe('Неділя')
  })

  test('returns null for number > 7', () => {
    expect(weekFn(9)).toBeNull()
  })

  test('returns null for float number', () => {
    expect(weekFn(1.5)).toBeNull()
  })

  test('returns null for string', () => {
    expect(weekFn('2')).toBeNull()
  })

})
