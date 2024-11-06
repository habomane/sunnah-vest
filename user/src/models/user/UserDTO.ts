import { randomUUID } from "crypto";
import { UserLogin } from "./User";
import { User } from "../../database";

export class UserDTO {
    userKey: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(data: Record<string, string>) {
        this.username = data.username;
        this.email = data.string;
        this.password = data.password;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.userKey = randomUUID();

    }

    toUser(): User { return new User(this.userKey, this.username, this.firstName, this.lastName,
        this.email, this.password
    )}
}

export class UserLoginDTO {
    email: string;
    password: string;

    constructor(data: Record<string, string>) {
        this.email = data.email;
        this.password = data.password;
    }

    toUserLogin() : UserLogin { return new UserLogin(this.email, this.password); }
}