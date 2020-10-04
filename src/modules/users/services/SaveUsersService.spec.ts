import FakeUserProvider from '../providers/UserProvider/fakes/FakeUserProvider';
import SaveUsersService from './SaveUsersService';

import FakeAddressesRepository from '../infra/typeorm/repositories/fakes/FakeAddressesRepository';
import FakeCompaniesRepository from '../infra/typeorm/repositories/fakes/FakeCompaniesRepository';
import FakeUsersRepository from '../infra/typeorm/repositories/fakes/FakeUsersRepository';

let fakeUserProvider: FakeUserProvider;
let fakeAddressesRepository: FakeAddressesRepository;
let fakeCompaniesRepository: FakeCompaniesRepository;
let fakeUsersRepository: FakeUsersRepository;
let saveUsersService: SaveUsersService;

describe('DownloadUsers', () => {
  beforeEach(() => {
    fakeUserProvider = new FakeUserProvider();
    fakeAddressesRepository = new FakeAddressesRepository();
    fakeCompaniesRepository = new FakeCompaniesRepository();
    fakeUsersRepository = new FakeUsersRepository();
    saveUsersService = new SaveUsersService(
      fakeUserProvider,
      fakeAddressesRepository,
      fakeCompaniesRepository,
      fakeUsersRepository,
    );
  });

  it('should be able to download users', async () => {
    const users = await saveUsersService.execute();

    expect(users).toBeTruthy();
    expect(users[0].name).toEqual('Jhon Doe');
  });

  it('should be able to reuse a saved company', async () => {
    const users = await saveUsersService.execute();
    await saveUsersService.execute();

    expect(users).toBeTruthy();
    expect(users[0].name).toEqual('Jhon Doe');
  });

  it('should be able to save only suite appartments users', async () => {
    const users = await saveUsersService.execute();
    await saveUsersService.execute();

    expect(users).toBeTruthy();
    expect(users[0].name).toEqual('Jhon Doe');
    expect(users.length).toEqual(1);
  });
});
