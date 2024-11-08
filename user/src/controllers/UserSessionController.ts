import { NextFunction, Request, Response } from 'express';
import { UserSessionService } from '../services';
import { APP_ERROR_MESSAGE, HTTP_RESPONSE_CODE, HttpException } from '../error-handling';
import { errorMiddleware } from '../middleware';

export class UserSessionController {

    userSessionService: UserSessionService;
    constructor() { this.userSessionService = new UserSessionService(); 
    }

    retrieveSession = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const sessionKey = req.cookies["sessionKey"];

            const userSession = await this.userSessionService.getUserSession(sessionKey);
            if(userSession === null || userSession.expired()) { throw new HttpException(HTTP_RESPONSE_CODE.UNAUTHORIZED, APP_ERROR_MESSAGE.sessionExpired)}

            next();

        }
        catch(error: unknown) {
            const exception = error instanceof HttpException ? error : new HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, 
                                                                                        error instanceof Error? error.message : APP_ERROR_MESSAGE.serverError);
            errorMiddleware(exception, req, res);
            
        }

    }
} 