import IUserProvider from '../providers/UserProvider/models/IUserProvider';
import IAddressesRepository from '../repositories/IAddressesRepository';
import ICompaniesRepository from '../repositories/ICompaniesRepository';
import IUsersRepository from '../repositories/IUsersRepository';
import User from '../infra/typeorm/entities/User';

class SaveUsersService {
  private userProvider: IUserProvider;

  private addressesRepository: IAddressesRepository;

  private companiesRepository: ICompaniesRepository;

  private usersRepository: IUsersRepository;

  constructor(
    userProvider: IUserProvider,
    addressesRepository: IAddressesRepository,
    companiesRepository: ICompaniesRepository,
    usersRepository: IUsersRepository,
  ) {
    this.userProvider = userProvider;
    this.addressesRepository = addressesRepository;
    this.companiesRepository = companiesRepository;
    this.usersRepository = usersRepository;
  }

  public async execute(): Promise<User[]> {
    const users = await this.userProvider.getAll();
    const addedUsers: User[] = [];

    const promises = users.map(async user => {
      let company = await this.companiesRepository.findCompanyByName(
        user.company.name,
      );

      if (!company) {
        company = await this.companiesRepository.create(user.company);
      }

      const address = await this.addressesRepository.create({
        ...user.address,
        lat: user.address.geo.lat,
        lng: user.address.geo.lng,
      });

      const dbUser = await this.usersRepository.create({
        ...user,
        company_id: company.id,
        address_id: address.id,
        external_id: user.id,
      });

      addedUsers.push(dbUser);
    });

    await Promise.all(promises);

    return addedUsers;
  }
}

export default SaveUsersService;
