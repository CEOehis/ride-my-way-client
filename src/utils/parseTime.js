/**
 * parseTime: parses time string returned from db call into 12h format
 *
 * @param {string} timeString in format 'hh:mm:00+00'
 * @returns {string} parsed time
 */
const parseTime = (timeString) => {
  const time = timeString.slice(0, -6);
  let h = parseInt(time.split(':')[0], 10);
  const m = time.split(':')[1];
  let period = 'AM';

  if (Number(h) > 12) {
    period = 'PM';
    h = h - 12; // eslint-disable-line
  }
  const result = `${h}:${m} ${period}`;
  return result;
};

export default parseTime;
