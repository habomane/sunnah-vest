import { Client } from "@libsql/client/.";
import { User } from "../models";
import { tursoDB } from "../connection";
import { createUserQuery, getUserByKeyQuery } from "../../queries/UserQueries";
import { ErrorResponse } from "../../models";

export class UserRepository {
    db: Client;

    constructor() { this.db = tursoDB; }

    async get() : Promise<User[]> {
        try {
            return []
        }
        catch(error) {
            console.log(error)
            return []
        }

    }

    async getUserFromKey(userKey: string) : Promise<User | null>  {
        try {
            return null;
        }
        catch(error) {
            console.log(error)
            return null;
        }

    }

    async put(user: User) : Promise<User | ErrorResponse> {
        try {
            await this.db.execute({
                sql: createUserQuery,
                args: [user.userKey, user.firstName, user.lastName, user.emailAddress, user.pwdHash]
            })

            const createdUser = await this.db.execute({
                sql: getUserByKeyQuery,
                args: [user.userKey]
            })

            if(createdUser.rows.length === 0) { throw new Error("No data return"); }

            console.log(createdUser.toJSON())

             return new ErrorResponse("");
        }
        catch(error: unknown)
        {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            return new ErrorResponse(errorMessage);
        }
    }

    async patch(userKey: string, user: User) : Promise<User | null> {
        // implement here 
        return null;
    }
    async delete(userKey: string) : Promise<void> {
        // implement here 
    }

    async validateUser(emailAddress: string, pwdHash: string) : Promise<User | null> {
        // implement here 
        return null;
    }


}