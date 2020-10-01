import { Router } from 'express';

import DownloadUsersControllerController from '@modules/users/infra/http/controllers/DownloadUsersControllerController';

const usersRouter = Router();

const downloadUsersControllerController = new DownloadUsersControllerController();

usersRouter.get('/', downloadUsersControllerController.index);

export default usersRouter;
