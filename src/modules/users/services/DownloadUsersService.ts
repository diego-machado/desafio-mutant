import IUserProvider, {
  User,
} from '../providers/UserProvider/models/IUserProvider';

class DownloadUsersDataService {
  private userProvider: IUserProvider;

  constructor(userProvider: IUserProvider) {
    this.userProvider = userProvider;
  }

  public async execute(): Promise<User[]> {
    return this.userProvider.getAll();
  }
}

export default DownloadUsersDataService;
