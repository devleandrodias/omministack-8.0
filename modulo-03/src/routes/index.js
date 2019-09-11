import { Router } from 'express';

import User from '../app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Leandro Dias',
    email: 'leandro.dias.profissional@gmail.com',
    password_hash: '123',
  });

  return res.json(user);
});

export default routes;
