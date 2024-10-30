import { Client } from "@libsql/client/.";
import { User } from "../models";
import { tursoDB } from "../connection";

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

    async getUserFromKey(userKey: UUID) : Promise<User> {
        try {
            return undefined;
        }
        catch(error) {
            console.log(error)
            return undefined;
        }

    }

    async put(user: User) : Promise<User> {
        // implement here 
    }

    async patch(userKey: string, user: User) : Promise<User> {
        // implement here 
    }
    async delete(userKey: UUID) : Promise<void> {
        // implement here 
    }

    async validateUser(emailAddress: string, pwdHash: string) : Promise<User> {
        // implement here 
    }


}