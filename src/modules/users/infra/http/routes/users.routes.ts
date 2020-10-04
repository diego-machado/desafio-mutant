import { Router } from 'express';

import DownloadUsersController from '@modules/users/infra/http/controllers/DownloadUsersController';
import SaveUsersController from '@modules/users/infra/http/controllers/SaveUsersController';

const usersRouter = Router();

const downloadUsersController = new DownloadUsersController();
const saveUsersController = new SaveUsersController();

usersRouter.get('/download', downloadUsersController.index);
usersRouter.get('/save', saveUsersController.index);

export default usersRouter;
