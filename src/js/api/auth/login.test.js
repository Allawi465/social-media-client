import { login } from './login';
import { LocalStorageMock } from '../../test/LocalStorageMock.js';

global.localStorage = new LocalStorageMock();

function fetchSuccessLogin() {
  return Promise.resolve({
    ok: true,
    status: 200,
    statusText: 'OK',
    json: () => Promise.resolve(data),
  });
}

function fetchFailureLogin(
  status = 401,
  statusText = 'Invalid email or password'
) {
  return Promise.resolve({
    ok: false,
    status: 'Unauthorized',
    statusText,
  });
}

const password = '12345678';
const mail = 'test@stud.noroff.no';

const data = {
  mail,
  id: 1,
  token: 'valid token',
};

describe('login', () => {
  it('should trow error when provided with an invalid mail or password', async () => {
    global.fetch = jest.fn(() => fetchFailureLogin());
    const loginFun = await login();
    expect(loginFun).toThrow('Invalid email or password');
  });

  it('Returns a valid token when provided with a valid mail and password', async () => {
    expect(data.mail).toMatch(/[\w\-.]+@(stud.)?noroff.no$/);
    expect(password).toMatch(/[^ ]{8,16}/);
    global.fetch = jest.fn(() => fetchSuccessLogin());
    const loginFun = await login(mail, password);
    expect(loginFun.token).toEqual(data.token);
  });
});
