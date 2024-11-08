import { Request, Response } from 'express';
import { UserService } from '../services';
import { setCookies, errorMiddleware } from '../middleware';
import { validationResult } from 'express-validator';
import { UserDTO, UserLoginDTO } from '../models';
import { APP_ERROR_MESSAGE, HTTP_RESPONSE_CODE, HttpException } from '../error-handling';
export class UserController {

    userService: UserService;

    constructor() { this.userService = new UserService(); }

    logUser = async (req: Request, res: Response) => {
        try {
            const validation = validationResult(req);
            if(!validation.isEmpty()) { throw new HttpException(HTTP_RESPONSE_CODE.BAD_REQUEST, APP_ERROR_MESSAGE.invalidRequest, validation)}
            const loginCredentials = new UserLoginDTO(req.body);
            console.log(loginCredentials)
            const userReturned = await this.userService.signIn(loginCredentials);
            // CREATE SESSION KEY

            setCookies(req, res, () => {

                res.status(userReturned.status).send(JSON.stringify(userReturned));
            });


        }
        catch(error: unknown) {
            const exception = error instanceof HttpException ? error : new HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, 
                                                                                        error instanceof Error? error.message : APP_ERROR_MESSAGE.serverError);
            errorMiddleware(exception, req, res);
            
        }

    }

    registerUser = async (req: Request, res: Response) => {
        try {
            const validation = validationResult(req);
            if(!validation.isEmpty()) { throw new HttpException(HTTP_RESPONSE_CODE.BAD_REQUEST, APP_ERROR_MESSAGE.invalidRequest)}
            const user = new UserDTO(req.body);

            const createdUser = await this.userService.createUser(user);

            res.status(createdUser.status).send(JSON.stringify(createdUser))



        }
        catch(error: unknown) {
            const exception = error instanceof HttpException ? error : new HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, 
                                                                                        error instanceof Error? error.message : APP_ERROR_MESSAGE.serverError);
            errorMiddleware(exception, req, res);
            
        }

    }


    deleteUser = async (req: Request, res: Response) => {
        try {
            const param = req.params["userKey"];
            if(param === undefined) { throw new HttpException(HTTP_RESPONSE_CODE.BAD_REQUEST, APP_ERROR_MESSAGE.invalidRequest)}

            const response = await this.userService.delete(param);

            res.status(response.status).send(JSON.stringify(response))

        }
        catch(error: unknown) {
            const exception = error instanceof HttpException ? error : new HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, 
                                                                                        error instanceof Error? error.message : APP_ERROR_MESSAGE.serverError);
            errorMiddleware(exception, req, res);
            
        }
    }
} 