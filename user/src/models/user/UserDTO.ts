import { randomUUID } from "crypto";
import { User } from "../../database";

export class UserDTO {
    userKey: string;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor(data: { username: string, email: string, password: string, firstName: string, lastName: string}) {
        this.username = data.username;
        this.email = data.email;
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

export class UserResponseDTO {
    userKey: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;

    constructor (userKey: string,
        username: string,
        firstName: string,
        lastName: string,
        emailAddressHash: string
    ) 
    {
        this.userKey = userKey;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = this.unhash(emailAddressHash);

    }

    unhash = (entity: string) : string => {
        return entity;
    }

}

export class UserLogin {
    emailHash: string;
    passwordHash: string;

    constructor(email: string, 
        password: string
    )
    {
        this.emailHash = this.hash(email);
        this.passwordHash = this.hash(password);
    }

    hash(item: string): string {
        return item;
    }
}