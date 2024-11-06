export class User {
    userKey: string;
    username: string;
    firstName: string;
    lastName: string;
    emailAddressHash: string;
    passwordHash: string;

    constructor (userKey: string,
        username: string,
        firstName: string,
        lastName: string,
        emailAddress: string,
        password: string
    ) 
    {
        this.userKey = userKey;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddressHash = this.hash(emailAddress);
        this.passwordHash = this.hash(password);

    }

    hash(item: string) : string {
        // Implement hashing 
        return item;
    }

}