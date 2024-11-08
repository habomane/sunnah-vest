import { Row } from "@libsql/client/.";
import { User, UserRepository } from "../database";
import { HttpException } from "../error-handling";
import { HttpResponse, UserDTO, UserLoginDTO } from "../models";

export class UserService {
  userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  get = async (): Promise<Row[]> => {
    return await this.userRepository.get();
  };
  getUser = async (userKey: string): Promise<User | null> => {
    return this.userRepository.getUserFromKey(userKey);
  };

  signIn = async (userLogin: UserLoginDTO): Promise<HttpResponse | HttpException> => {
    return await this.userRepository.validateUser(userLogin);
  };

  createUser = async (user: UserDTO): Promise<HttpResponse | HttpException> => {
    return await this.userRepository.post(user.toUser());
  };

  delete = async (userKey: string): Promise<HttpResponse> => {
    return await this.userRepository.delete(userKey)
  };

}
