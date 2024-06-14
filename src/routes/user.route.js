import { getUsersController, getUserController, postUserController, putUserController, deleteUserController } from '../controllers/user.controller.js';
import { Router } from 'express';
import { verifyJWT } from '../middlewares/http/auth.middleware.js';

const userRouter = Router();

userRouter.get('/', getUsersController);
userRouter.get('/:email', getUserController);
userRouter.post('/', postUserController);
userRouter.put('/:email', verifyJWT, putUserController);
userRouter.delete('/:email', verifyJWT, deleteUserController);

export default userRouter;
