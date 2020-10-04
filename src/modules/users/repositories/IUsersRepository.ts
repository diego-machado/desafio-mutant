import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

export default interface IUsersRepository {
  create(user: ICreateUserDTO): Promise<User>;
  save(user: User): Promise<User>;
}
