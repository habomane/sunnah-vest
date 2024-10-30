import { Request, Response } from 'express';

export class UserController {

    sayHello (req: Request, res: Response) {
        res.send("hello");
    }
} 