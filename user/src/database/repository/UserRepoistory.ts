import { Client } from "@libsql/client/.";
import { User } from "../models";
import { tursoDB } from "../connection";
import { createUserQuery, getUserByKeyQuery, getUserByLoginQuery } from "../../queries/UserQueries";
import { UserLoginDTO } from "../../models";
import { HttpException, HTTP_RESPONSE_CODE, APP_ERROR_MESSAGE } from "../../error-handling";

export class UserRepository {
    db: Client;

    constructor() { this.db = tursoDB; }

    get = async () : Promise<User[]> => {
        try {
            return []
        }
        catch(error) {
            console.log(error)
            return []
        }

    }

    getUserFromKey = async (userKey: string) : Promise<User | null>  => {
        try {
            return null;
        }
        catch(error) {
            console.log(error)
            return null;
        }

    }

    put = async (user: User) : Promise<User | HttpException> => {
        try {
            await this.db.execute({
                sql: createUserQuery,
                args: [user.userKey, user.firstName, user.lastName, user.emailAddressHash, user.passwordHash]
            })

            const createdUser = await this.db.execute({
                sql: getUserByKeyQuery,
                args: [user.userKey]
            })

            if(createdUser.rows.length === 0) { throw new HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, APP_ERROR_MESSAGE.serverError); }

            console.log(createdUser.toJSON())

             return user;
        }
        catch(error: unknown)
        {
            const exception = error instanceof HttpException ? error : new  HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, APP_ERROR_MESSAGE.serverError);
            return exception;
        }
    }

    patch = async (userKey: string, user: User) : Promise<User | null> => {
        // implement here 
        return null;
    }
    delete = async (userKey: string) : Promise<void> => {
        // implement here 
    }

    validateUser = async (user: UserLoginDTO) : Promise<User | HttpException> => {
        // implement here 
        try {
            console.log("at least im here")
            const validatedUser = await this.db.execute({
                sql: getUserByLoginQuery,
                args: [user.email, user.password]
            });

            console.log("still here?")

            if(validatedUser.rows.length == 0) { throw new HttpException(HTTP_RESPONSE_CODE.NOT_FOUND, APP_ERROR_MESSAGE.invalidCredentials);}

            const res = validatedUser.toJSON();
            console.log("here");
            return new User(res["userKey"], res["username"], res["firstName"], 
                res["lastName"], res["emailAddress"], res["password"]
            );

        }
        catch(error: unknown)
        {
            const exception = error instanceof HttpException ? error : new  HttpException(HTTP_RESPONSE_CODE.SERVER_ERROR, APP_ERROR_MESSAGE.serverError);
            return exception;
        }
    }


}