import { UserSession, UserSessionRepository } from "../database";

export class UserService {
    userSessionRepository: UserSessionRepository

    constructor() {
        this.userSessionRepository = new UserSessionRepository();
    }

    async createUserSession(userSession: UserSession): Promise<UserSession | null> {
        return this.userSessionRepository.put(userSession);
    }
    async getUserSession(sessionKey: string): Promise<UserSession | null> {
        return this.userSessionRepository.getUserSession(sessionKey);
    }
}