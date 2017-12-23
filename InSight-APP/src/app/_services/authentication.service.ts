import { Appconfig } from './../app.config';
import { User } from './../_models/user';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: Appconfig) { }

   login(email: string, password: string,secret: string) {
        return this.http.post(this.config.apiUrl, { email: email, password: password ,secret:secret})
            .map((response => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                console.log(user);
                if (user&&user.token) {
                   console.log('user id is:'+ user.id); 
                   // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    localStorage.setItem('id',user.id);
                    localStorage.setItem('username',user.username);
                }
            }));
    }

   logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}