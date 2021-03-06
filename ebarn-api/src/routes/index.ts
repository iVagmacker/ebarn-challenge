import { Router } from 'express';

import tractorsRouter from './tractors.routes';

const routes = Router();

routes.use('/tractor', tractorsRouter);

export default routes;
