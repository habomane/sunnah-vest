import { Request, Response } from 'express';
import { UserService } from '../services';

export class UserController {
    userService: UserService;

    constructor() { this.userService = new UserService(); }

    logUser (req: Request, res: Response) {
        res.send(req.body["email"]);
    }
} 