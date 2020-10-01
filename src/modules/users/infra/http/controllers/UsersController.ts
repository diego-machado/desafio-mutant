import { Request, Response } from 'express';
import JSONPlaceholderProvider from '@modules/users/providers/UserProvider/implementations/JSONPlaceholderProvider';
import DownloadUsersService from '@modules/users/services/DownloadUsersService';

export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const downloadUsersService = new DownloadUsersService(
      new JSONPlaceholderProvider(),
    );
    const users = await downloadUsersService.execute();

    return response.json(users);
  }
}
