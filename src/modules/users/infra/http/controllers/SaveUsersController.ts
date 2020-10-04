import { Request, Response } from 'express';
import JSONPlaceholderProvider from '@modules/users/providers/UserProvider/implementations/JSONPlaceholderProvider';
import SaveUsersService from '@modules/users/services/SaveUsersService';
import AddressesRepository from '../../typeorm/repositories/AddressesRepository';
import CompaniesRepository from '../../typeorm/repositories/CompaniesRepository';
import UsersRepository from '../../typeorm/repositories/UsersRepository';

export default class SaveUsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const saveUsersService = new SaveUsersService(
      new JSONPlaceholderProvider(),
      new AddressesRepository(),
      new CompaniesRepository(),
      new UsersRepository(),
    );
    const users = await saveUsersService.execute();

    return response.json(users);
  }
}
