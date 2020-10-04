import FakeUserProvider from '../providers/UserProvider/fakes/FakeUserProvider';
import DownloadUsersService from './DownloadUsersService';

describe('DownloadUsersService', () => {
  it('should be able to save users', async () => {
    const fakeUserProvider = new FakeUserProvider();
    const downloadUsersService = new DownloadUsersService(fakeUserProvider);

    const users = await downloadUsersService.execute();

    expect(users).toBeTruthy();
    expect(users[0]).toEqual({
      id: 1,
      name: 'Jhon Doe',
      username: 'jhon.doe',
      email: 'jhon.doe@server.com',
      phone: '+55 (48) 999999999',
      website: 'http://www.jhondoe.me',
      address: {
        city: 'Pallet',
        street: 'Angel Grove',
        suite: 'Suite 154',
        zipcode: '00000-000',
        geo: {
          lat: '123',
          lng: '123',
        },
      },
      company: {
        bs: '',
        catchPhrase: 'Gotta catch them all',
        name: 'Pokemon',
      },
    });
  });
});
