import { User } from './../_models/user';
import { SocialUser } from 'angular4-social-login';
import { Appconfig } from './../app.config';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { MatSnackBar } from '@angular/material';



import { ForgotPasswordClass } from '../forgotpasswordclass';
import { Email } from '../forgotpassword/email';

@Injectable()
export class UserService {

    public user: User;
    private headers = new Headers({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});
    constructor(private http: Http, private config: Appconfig ,private snackBar: MatSnackBar, ) { }

    public query:ForgotPasswordClass;
    public json:string;
    public email:Email;

//    getAll() {
//         return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
//     }

//    getById(id: number) {
//         return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
//     }

   create(firstName: string,lastName: string,username: string,email:string, password: string,secretregister: string,photoUrl:string) {
        return this.http.post(this.config.apiUrl_register,{firstname:firstName,lastname:lastName, username: username,email:email,password: password ,secretregister:secretregister,photoUrl:photoUrl}, this.jwt());

    }
// Posting Email to the Backend API.
    sendemail(email:string)
    {
        this.email = new Email(email);
        console.log(email);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.config.apiUrl_email, this.email, options).map(response => response.json())
                    .subscribe(
                    (error) => { 
                               this.snackBar.open('Error Occured' ,'close' );
                        
                    })
    }
    // Posting Email and Password to the Backend API.
    updatepassword(email,password)
         {
            console.log(email);
            let headers=new Headers();
            this.query=new ForgotPasswordClass(email,password);
            headers.append('Content-Type' , 'application/json');
            headers.append('Access-Control-Allow-Origin', '*');
            this.json= JSON.stringify(this.query);
            return this.http.patch(this.config.apiUrl_password+email, this.json, {headers:headers}).toPromise().catch();
        }

     socialregisterfacebook(user:SocialUser){
        return this.http.post(this.config.apiUrl_socialfacebook,JSON.stringify(user),{headers: this.headers})
            .map((response => {

                let user = response.json();
                console.log('user id is ' + user.id);
                localStorage.setItem('id', user.id);
                localStorage.setItem('username', user.username);
            })) 
        .toPromise()
     .then((res)=>console.log("sumant"+res),
           (err)=>console.log(err))
        .catch((ress) =>console.log("error caught",ress));
     }
     socialregistergoogle(user:SocialUser){
        return this.http.post(this.config.apiUrl_socialgoogle,JSON.stringify(user),{headers: this.headers})


        .map((response => {

                let user = response.json();
                console.log('user ' + user.id);
                localStorage.setItem('id', user.id);
                localStorage.setItem('username', user.username);
            }))
     .toPromise()
     .then((res)=>console.log("sumant"+res),
           (err)=>console.log(err))
     .catch((ress) =>console.log("error caught",ress))
     }

//    update(user: User) {
//         return this.http.put(this.config.apiUrl + '/users/' + user.id, user, this.jwt());
//     }

//    delete(id: number) {
//         return this.http.delete(this.config.apiUrl + '/users/' + id, this.jwt());
//     }

   // private helper methods

   private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}