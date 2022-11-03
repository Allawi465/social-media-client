import { remove } from '../../storage/index.js';
import { logout } from './logout';
import { LocalStorageMock } from '../../test/LocalStorageMock.js';

global.localStorage = new LocalStorageMock();

describe('logout', () => {
  it('The logout function clears the token from browser storage', async () => {
    const logoutFun = logout();
    const key = 'token';
    remove(key);
    expect(logoutFun).toEqual(undefined);
  });
});
