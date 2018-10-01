import parseTime from '../../utils/parseTime';

describe('parseTime', () => {
  it('parses a time string and returns a string', () => {
    const time = '12:30:00+01';
    expect(typeof parseTime(time)).toBe('string');
  });

  it('parses a time string to AM', () => {
    const time = '12:30:00+01';
    expect(parseTime(time)).toBe('12:30 AM');
  });

  it('parses a time string to AM', () => {
    const time = '14:30:00+01';
    expect(parseTime(time)).toBe('2:30 PM');
  });
});
