import { User, UserRepository } from "../database";
import { ErrorResponse } from "../models";

export class UserService {
    userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(userKey: string): Promise<User | null> {
        return this.userRepository.getUserFromKey(userKey);
    }

    async signIn(userName: string, pwdHash: string) : Promise<User | null> {
        return await this.userRepository.validateUser(userName, pwdHash);
    }

    async createUser(user: User) : Promise<User | ErrorResponse> {
        return await this.userRepository.put(user);
    }

    async delete(userKey: string): Promise<void> {
        // Implementation here
    }

    async update(userKey: string, user: User): Promise<User | null> {
        return await this.userRepository.patch(userKey, user);
    }

}