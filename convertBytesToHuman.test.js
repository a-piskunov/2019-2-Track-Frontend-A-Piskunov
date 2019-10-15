/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false);
  expect(convertBytesToHuman('string')).toBe(false);
  expect(convertBytesToHuman(Infinity)).toBe(false);
  expect(convertBytesToHuman(NaN)).toBe(false);
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe('5 B');
  expect(convertBytesToHuman(1024)).toBe('1 KB');
  expect(convertBytesToHuman(1024*1024)).toBe('1 MB');
  expect(convertBytesToHuman(2*1024*1024*1024)).toBe('2 GB');
  expect(convertBytesToHuman(1024*1024)).toBe('1 MB');
  expect(convertBytesToHuman(2.5*1024*1024*1024)).toBe('2.5 GB');
});
