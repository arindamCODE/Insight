export class Settings {
    id: number
    firstName: string;
    lastName: string;
    username: string;
    passwordHash: string;
    passwordSalt: string;
 
    constructor(id: number, firstName: string, lastName: string, username: string, passwordHash: string,passwordSalt: string) {
        
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.passwordHash= passwordHash;
        this.passwordSalt= passwordSalt;
    }
 
 }