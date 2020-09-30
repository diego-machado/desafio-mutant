import { Router } from 'express';

import UsersController from '@modules/users/infra/http/controllers/UsersController';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.get('/', usersController.create);

export default usersRouter;
