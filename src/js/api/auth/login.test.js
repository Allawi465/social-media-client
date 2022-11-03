import { login } from './login';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

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

const inValid_password = '123456';
const inValid_mail = 'est@stud123.noroff.no';
const data = {
  mail: 'test@stud.noroff.no',
  password: '12345678',
  id: 1,
  token: 'valid token',
};

describe('login', () => {
  it('should return false when provided with an invalid mail or password', async () => {
    global.fetch = jest.fn(() => fetchFailureLogin());
    const loginFun = await login(inValid_password, inValid_mail);
    expect(loginFun).toEqual(false);
  });

  it('Returns a valid token when provided with a valid mail and password', async () => {
    global.fetch = jest.fn(() => fetchSuccessLogin());
    const loginFun = await login(data);
    expect(loginFun.mail).toMatch(/[\w\-.]+@(stud.)?noroff.no$/);
    expect(loginFun.password).toMatch(/[^ ]{8,16}/);
  });
});
