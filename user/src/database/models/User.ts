import { UUID } from "crypto";

export class User {
    userKey: UUID;
    username: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    pwdHash: string;
    accountTypeKey: number;
    portfolioKey: number;

    constructor (userKey: UUID,
        username: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        pwdHash: string,
        accountTypeKey: number,
        portfolioKey: number
    ) 
    {
        this.userKey = userKey;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.pwdHash = pwdHash;
        this.accountTypeKey = accountTypeKey;
        this.portfolioKey = portfolioKey;

    }
}