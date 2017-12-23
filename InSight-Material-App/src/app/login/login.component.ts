import { ForgotpasswordComponent } from './../forgotpassword/forgotpassword.component';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { AlertService, AuthenticationService } from '../_services/index';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


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
        private alertService: AlertService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog
        ) { }

   ngOnInit() {
        // reset login status
        this.authenticationService.logout();
        
       // get return url from route parameters or default to '/auth'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    }
    openDialog(): void {
        let dialogRef = this.dialog.open(ForgotpasswordComponent, {
          width: '300px',
          
        });
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        
        });}

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
                    if(localStorage.getItem('test'))
                    {
                        this.snackBar.open('Sever is down! Please try after sometime','Close');
                     
                    }
                    else{
                        this.snackBar.open('Username or password is incorrect','Close');
                    }
                    this.loading = false;
                    
                });
    }
    
}