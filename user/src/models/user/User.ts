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