import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import FileController from '../app/controllers/FileController';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
