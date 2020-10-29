import { Router } from 'express';
import carsRouter from './cars/index'

const apiRouter = new Router();

apiRouter.use("/cars", carsRouter);

export default apiRouter;