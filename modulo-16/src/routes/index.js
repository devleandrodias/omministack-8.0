import { Router } from 'express';
import multer from 'multer';

import multerConfig from '../config/multer';

import FileController from '../app/controllers/FileController';
import UserController from '../app/controllers/UserController';
import SessionController from '../app/controllers/SessionController';
import ProviderController from '../app/controllers/ProviderController';
import AppointmentsController from '../app/controllers/AppointmentsController';
import AvailableController from '../app/controllers/AvailableController';

import authMiddleware from '../app/middlewares/auth';
import ScheduleController from '../app/controllers/ScheduleController';
import NotificationController from '../app/controllers/NotificationController';

import validateUserStore from '../app/validators/UserStore';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/users', validateUserStore, UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

routes.get('/appointments', AppointmentsController.index);
routes.post('/appointments', AppointmentsController.store);
routes.delete('/appointments/:id', AppointmentsController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notification', NotificationController.index);
routes.put('/notification/:id', NotificationController.update);

export default routes;
