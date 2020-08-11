import { getDateTimeGap } from './DateTime';

describe('Get DateTime Gap', () => {
  const now = new Date();

  test('Invalidate Date', () => {
    expect(getDateTimeGap(null)).toBe('-');
  });
  test('Check Now', () => {
    expect(getDateTimeGap(now)).toBe('Just Now');
  });
  test('Over a Minute', () => {
    const target = now.getTime() - 60 * 1000;
    const targetDate = new Date(target);
    expect(getDateTimeGap(targetDate)).toBe('1 min ago');
  });
  test('Over a Hour', () => {
    const target = now.getTime() - 60 * 60 * 1000;
    const targetDate = new Date(target);
    expect(getDateTimeGap(targetDate)).toBe('1 hour ago');
  });
  test('Over a Day', () => {
    const target = now.getTime() - 60 * 60 * 24 * 1000;
    const targetDate = new Date(target);
    expect(getDateTimeGap(targetDate)).toBe('1 days ago');
  });
});
