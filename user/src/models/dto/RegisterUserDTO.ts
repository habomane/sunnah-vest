export class RegisterUserDTO {
    username: string;
    email: string;
    pwdHash: string;
    firstName: string;
    lastName: string;
    accountTypeKey: number;
    portfolioKey: number;

    constructor(data: Record<string, string>) {
        this.username = data.username;
        this.email = data.string;
        this.pwdHash = data.pwdHash;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.accountTypeKey = Number(data.accountTypeKey);
        this.portfolioKey = Number(data.portfolioKey);

    }
}