import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['/login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

   constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

   ngOnInit() {
        // reset login status
        this.authenticationService.logout();

       // get return url from route parameters or default to '/auth'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/auth';
    }

   login() {
        this.loading = true;
        let body= new URLSearchParams();
        this.model.secret= 'secretcode';
        console.log('email is '+this.model.email);
        this.authenticationService.login(this.model.email, this.model.password,this.model.secret)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error('Username or password is incorrect');
                    this.loading = false;
                });
    }
}