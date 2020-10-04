import IUsersRepository from '@modules/users/repositories/IUsersRepository';

import ICraeteUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '@modules/users/infra/typeorm/entities/User';

class FakeUsersRepository implements IUsersRepository {
  private users: User[] = [];

  public async create({
    name,
    username,
    email,
    phone,
    website,
    external_id,
    address_id,
    company_id,
  }: ICraeteUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      id: Math.floor(Math.random() * 100 + 1),
      name,
      username,
      email,
      phone,
      website,
      external_id,
      address_id,
      company_id,
    });

    this.users.push(user);

    return user;
  }

  public async save(user: User): Promise<User> {
    const findIndex = this.users.findIndex(findUser => findUser.id === user.id);

    this.users[findIndex] = user;

    return user;
  }
}

export default FakeUsersRepository;
