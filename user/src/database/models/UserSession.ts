

export class UserSession {
    userKey: string;
    sessionKey: string;
    dateLogin: Date;
    dateSessionExpiration: Date;

    constructor (userKey: string,
        sessionKey: string,
        dateLogin: Date,
        dateSessionExpiration: Date
    ) 
    {
        this.userKey = userKey;
        this.sessionKey = sessionKey;
        this.dateLogin = dateLogin;
        this.dateSessionExpiration = dateSessionExpiration;

    }


    expired() : boolean {
        if(this.dateSessionExpiration > new Date()) {
            return false;
        }

        return true;
    }
}