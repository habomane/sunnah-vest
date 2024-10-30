import { body } from 'express-validator';

export const registerUserValidation = [
    body("username").exists().isString().notEmpty(),
    body("firstName").exists().isString().notEmpty(),
    body("lastName").exists().isString().notEmpty(),
    body("pwdHash").exists().isString().notEmpty(),
    body("accountTypeKey").exists().isNumeric().notEmpty(),
    body("portfolioKey").exists().isNumeric().notEmpty()
]