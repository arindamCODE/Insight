import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

   constructor(private router: Router) { }

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('googleuser')) {
        // logged in so return true\
        console.log("Google");
        return true;
    }
        if (localStorage.getItem('user')) {
           
            return true;
        }
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log("Native");
            return true;
        }
        console.log("Returning");

       // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}