import { User, UserRepository } from "../database";

export class UserService {
    userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getUser(userKey: string): Promise<User> {
        return this.userRepository.getUserFromKey(userKey);
    }

    async signIn(userName: string, pwdHash: string) : Promise<User> {
        return await this.userRepository.validateUser(userName, pwdHash);
    }

    async signUp(user: User) : Promise<User> {
        return await this.userRepository.put(user);
    }

    async delete(userKey: string): Promise<void> {
        // Implementation here
    }

    async update(userKey: string, user: User): Promise<User> {
        return await this.userRepository.patch(userKey, user);
    }

}