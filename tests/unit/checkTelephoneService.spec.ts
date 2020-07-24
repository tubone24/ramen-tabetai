import { checkTelephoneNumber } from "../../src/checkTelephoneService";

describe('checkTelephoneNumber', () => {
  it('free call', () => {
    const input = '0120-893-893';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('050+', () => {
    const input = '050-3322-1123';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('Tokyo 03', () => {
    const input = '03-1234-5678';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('Niigata 025', () => {
    const input = '0258-25-2134';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('CellPhone', () => {
    const input = '090-1111-2321';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('OnlyNum', () => {
    const input = '0258252134';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(true)
  });
  it('PostNum', () => {
    const input = '170-0001';
    const actual = checkTelephoneNumber(input);
    expect(actual).toEqual(false)
  });
});
