import { User, UserRepository } from "../database";
import { HttpException } from "../error-handling";
import { UserDTO, UserLoginDTO } from "../models";

export class UserService {
    userRepository: UserRepository

    constructor() {
        this.userRepository = new UserRepository();
    }

    getUser = async (userKey: string): Promise<User | null> => {
        return this.userRepository.getUserFromKey(userKey);
    }

    signIn = async (userLogin : UserLoginDTO) : Promise<User | HttpException> => {
        console.log("sign in ")
        return await this.userRepository.validateUser(userLogin);
    }

    createUser = async (user: UserDTO) : Promise<User | HttpException> => {
        return await this.userRepository.put(user.toUser());
    }

    delete = async (userKey: string): Promise<void> => {
        // Implementation here
    }

    update = async (userKey: string, user: User): Promise<User | null> => {
        return await this.userRepository.patch(userKey, user);
    }

}