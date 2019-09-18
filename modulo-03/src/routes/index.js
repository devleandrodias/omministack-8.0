import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import FileController from '../app/controllers/FileController';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import ProviderController from '../app/controllers/ProviderController';
import AppointmentsController from '../app/controllers/AppointmentsController';

import authMiddleware from '../app/middlewares/auth';
import ScheduleController from '../app/controllers/ScheduleController';
import NotificationController from '../app/controllers/NotificationController';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointmentsController.store);
routes.get('/appointments', AppointmentsController.index);

routes.get('/schedule', ScheduleController.index);

routes.get('/notification', NotificationController.index);
routes.put('/notification/:id', NotificationController.update);

export default routes;
