export class ForgotPasswordClass{
    email:string;
    
    passwordSalt:string;

    constructor(email:string,passwordSalt:string){
        this.email=email;
        
        this.passwordSalt=passwordSalt;
    }
}