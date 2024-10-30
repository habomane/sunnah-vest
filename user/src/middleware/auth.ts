import { NextFunction, Request, Response } from "express";

export const validateSession = (req: Request, res: Response, next: NextFunction) => {
    console.log("Validation here");
    next();
}
