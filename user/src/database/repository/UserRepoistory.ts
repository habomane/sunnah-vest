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

    async getUserFromKey(userKey: string) : Promise<User | null>  {
        try {
            return null;
        }
        catch(error) {
            console.log(error)
            return null;
        }

    }

    async put(user: User) : Promise<User | null> {
        // implement here 
        return null;
    }

    async patch(userKey: string, user: User) : Promise<User | null> {
        // implement here 
        return null;
    }
    async delete(userKey: UUID) : Promise<void> {
        // implement here 
    }

    async validateUser(emailAddress: string, pwdHash: string) : Promise<User | null> {
        // implement here 
        return null;
    }


}