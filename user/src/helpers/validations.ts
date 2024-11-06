import { body } from 'express-validator';

export const registerUserValidation = [
    body("username").exists().isString().notEmpty(),
    body("firstName").exists().isString().notEmpty(),
    body("lastName").exists().isString().notEmpty(),
    body("email").exists().isString().notEmpty(),
    body("password").exists().isString().notEmpty()
]

export const loginUserValidation = [
    body("email").exists().isString().notEmpty(),
    body("password").exists().isString().notEmpty()
]