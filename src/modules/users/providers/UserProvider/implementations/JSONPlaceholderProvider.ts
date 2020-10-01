import axios from 'axios';
import IUserProvider, { User } from '../models/IUserProvider';

export default class JSONPlaceholderProvider implements IUserProvider {
  public async getAll(): Promise<User[]> {
    let users: User[] = [];

    const response = await axios.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
    );

    if (response.data) {
      users = response.data;
    }

    return users;
  }
}
