import { Client } from "@libsql/client/.";
import { UserSession } from "../models";
import { tursoDB } from "../connection";

export class UserSessionRepository {
    db: Client;

    constructor() { this.db = tursoDB; }

    async getUserSession(sessionKey: string) : Promise<UserSession | null> {
        return null;
    }

    async put(session: UserSession) : Promise<UserSession | null> {
        // implement here 
        return null;
    }

}