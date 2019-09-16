import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';

import authMiddleware from '../app/middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.post('/files', upload.single('file'), (req, res) => {
  return res.json({ ok: true });
});

routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
