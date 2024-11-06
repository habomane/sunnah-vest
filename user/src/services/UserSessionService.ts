import { UserSession, UserSessionRepository } from "../database";

export class UserSessionService {
    userSessionRepository: UserSessionRepository

    constructor() {
        this.userSessionRepository = new UserSessionRepository();
    }

    createUserSession = async (userSession: UserSession): Promise<UserSession | null> => {
        return this.userSessionRepository.put(userSession);
    }
    getUserSession = async (sessionKey: string): Promise<UserSession | null> => {
        return this.userSessionRepository.getUserSession(sessionKey);
    }
}