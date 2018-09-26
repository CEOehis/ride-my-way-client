import jwt from 'jsonwebtoken';
import userIsLoggedIn from '../../utils/userIsLoggedIn';

describe('userIsLoggedIn', () => {
  it('should return a boolean', () => {
    expect(typeof userIsLoggedIn()).toBe('boolean');
  });

  it('should return false if token is not decodable', () => {
    window.localStorage.setItem('token', 'some.irregulartoken');
    expect(userIsLoggedIn()).toEqual(false);
  });

  it('should return true if token is not expired', () => {
    const token = jwt.sign({ id: 1 }, 'secret', {
      expiresIn: '4h',
    });
    window.localStorage.setItem('token', token);
    expect(userIsLoggedIn()).toEqual(true);
  });

  it('should return false if token is expired', () => {
    const expiredToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTM3ODc3MTk1LCJleHAiOjE1Mzc4NzcxOTZ9.peXgmzR1Any3D-MVcXmwPYr_imS4BwVYZbxKyHsb2pc';
    window.localStorage.setItem('token', expiredToken);
    expect(userIsLoggedIn()).toEqual(false);
  });
});
