import { AuthenticationResponse } from './authentication-response';

describe('AuthenticationResponse', () => {
  it('should create an instance', () => {
    expect(AuthenticationResponse.getInstance()).toBeTruthy();
  });
});
