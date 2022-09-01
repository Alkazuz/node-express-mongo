import { Router } from 'express';
import UserController from '../controllers/UserControllers';

const userRouter = Router();

userRouter.post('/new', UserController.create)
userRouter.get('/list', /** */)


export default userRouter;