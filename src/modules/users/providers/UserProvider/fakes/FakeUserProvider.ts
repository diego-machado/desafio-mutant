import IUserProvider, { User } from '../models/IUserProvider';

export default class FakeUserProvider implements IUserProvider {
  private users: User[] = [
    {
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
    },
    {
      id: 1,
      name: 'Jhane Doe',
      username: 'jhane.doe',
      email: 'jhane.doe@server.com',
      phone: '+55 (48) 999999999',
      website: 'http://www.jhanedoe.me',
      address: {
        city: 'Pallet',
        street: 'Angel Grove',
        suite: 'Apt 154',
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
    },
  ];

  public async getAll(): Promise<User[]> {
    return this.users;
  }
}
