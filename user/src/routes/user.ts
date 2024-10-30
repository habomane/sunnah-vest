import express from 'express'
import { UserController } from '../controllers/UserController';

export const userRouter = express.Router();
const userController = new UserController();

// Route only concerned with HTTP Layer
userRouter.get("/hello", userController.sayHello);