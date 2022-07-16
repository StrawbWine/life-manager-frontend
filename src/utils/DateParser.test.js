import DateToString from "./DateParser";

test('parses date with month and day of month less than 10 with 0 prefix', () => {
  const date = new Date(2022, 1, 1)  
  expect(DateToString(date)).toBe("2022-01-01");
});

test('parses date with month and day of month bigger than 10', () => {
  const date = new Date(2022, 11, 21)  
  expect(DateToString(date)).toBe("2022-11-21");
});