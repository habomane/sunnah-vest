import { Client, Row } from "@libsql/client/.";
import { User } from "../models";
import { tursoDB } from "../connection";
import {
  createUserQuery,
  deleteUserQuery,
  getUserByKeyQuery,
  getUserByLoginQuery,
  getUsersQuery,
} from "../../queries/UserQueries";
import { HttpResponse, UserLoginDTO, UserResponseDTO } from "../../models";
import {
  HttpException,
  HTTP_RESPONSE_CODE,
  APP_ERROR_MESSAGE,
  APP_SUCCESS_MESSAGE,
} from "../../error-handling";
import { deleteUserSessionsQuery } from "../../queries/UserSessionQueries";

export class UserRepository {
  db: Client;

  constructor() {
    this.db = tursoDB;
  }

  get = async (): Promise<Row[]> => {
    try {
      const users = await this.db.execute({
        sql: getUsersQuery,
        args: ["Habso"],
      });
      return users.rows;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  getUserFromKey = async (userKey: string): Promise<User | null> => {
    try {
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  post = async (user: User): Promise<HttpResponse | HttpException> => {
    try {
      await this.db.execute({
        sql: createUserQuery,
        args: [
          user.userKey,
          user.firstName,
          user.lastName,
          user.username,
          user.emailAddressHash,
          user.passwordHash,
        ],
      });
      const createdUser = await this.db.execute({
        sql: getUserByKeyQuery,
        args: [user.userKey],
      });

      if (createdUser.rows.length === 0) {
        throw new HttpException(
          HTTP_RESPONSE_CODE.SERVER_ERROR,
          APP_ERROR_MESSAGE.serverError
        );
      }

      return new HttpResponse(HTTP_RESPONSE_CODE.CREATED, APP_SUCCESS_MESSAGE.createdUser);

    } catch (error: unknown) {
      const exception =
        error instanceof HttpException
          ? error
          : new HttpException(
              HTTP_RESPONSE_CODE.SERVER_ERROR,
              error instanceof Error
                ? error.message
                : APP_ERROR_MESSAGE.serverError
            );
      return exception;
    }
  };

  patch = async (userKey: string, user: User): Promise<UserResponseDTO | null> => {
    // implement here
    return null;
  };
  delete = async (userKey: string): Promise<HttpResponse | HttpException> => {
    try {
        console.log("here")

        await this.db.execute({
            sql: deleteUserSessionsQuery,
            args: [userKey]
        });

        await this.db.execute({
          sql: deleteUserQuery,
          args: [userKey]
        });
        
  
        return new HttpResponse(HTTP_RESPONSE_CODE.SUCCESS, APP_SUCCESS_MESSAGE.userDeleted);
  
      } catch (error: unknown) {
        console.log({error})
        const exception =
          error instanceof HttpException
            ? error
            : new HttpException(
                HTTP_RESPONSE_CODE.SERVER_ERROR,
                error instanceof Error && error.message !== undefined
                  ? error.message
                  : APP_ERROR_MESSAGE.serverError
              );
        return exception;
      }
  };

  validateUser = async (user: UserLoginDTO): Promise<HttpResponse | HttpException> => {
    // implement here
    try {
      const validatedUser = await this.db.execute({
        sql: getUserByLoginQuery,
        args: [user.email, user.password],
      });

      if (validatedUser.rows.length == 0) {
        throw new HttpException(
          HTTP_RESPONSE_CODE.NOT_FOUND,
          APP_ERROR_MESSAGE.userDoesntExist
        );
      }

      const res = validatedUser.rows[0];

      const responseBody = new UserResponseDTO(
        String(res[0]),
        String(res[1]),
        String(res[2]),
        String(res[3]),
        String(res[4])
      );

      return new HttpResponse(HTTP_RESPONSE_CODE.SUCCESS, APP_SUCCESS_MESSAGE.userAuthenticated, responseBody);

    } catch (error: unknown) {

      const exception =
        error instanceof HttpException
          ? error
          : new HttpException(
              HTTP_RESPONSE_CODE.SERVER_ERROR,
              error instanceof Error
                ? error.message
                : APP_ERROR_MESSAGE.serverError
            );
      return exception;
    }
  };
}
