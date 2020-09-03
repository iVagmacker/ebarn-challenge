import { Router } from 'express';

import tractorsRouter from './tractors.routes';

const routes = Router();

routes.use('/tractors', tractorsRouter);

export default routes;
