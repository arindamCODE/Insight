
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
//Validation for email and Password.
@Directive({
  selector: '[Equalvalidate][formControlName],[formControl],[ngModel]',
  providers: [
      {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => EqualValidator),
          multi: true
      }
  ]
})
export class EqualValidator implements Validator {
  
     constructor(@Attribute('Equalvalidate') public Equalvalidate: string) { }
  
     validate(abControl: AbstractControl): { [key: string]: any } {
          // Get self value.
          let val = abControl.value;
  
         // Get control value.
          let cValue = abControl.root.get(this.Equalvalidate);
  
         // value not equal
          if (cValue && val !== cValue.value) return {
              Equalvalidate: false
          }
  
         return null;
      }
  }

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent  {

 model: any = {};
 loading = false;
 public result;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<ChangepasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  //Disappearance of Dialog Box on click
  onNoClick(): void {
    this.dialogRef.close();
  }
 // Passing the Email and Password Entered to the User Service.
  updatedata(){
    this.loading = true;
    console.log(this.model.email);

    this.userService.updatepassword(this.model.email,this.model.password);
    this.loading=false;
    this.snackBar.open('Password Changed.' ,'close');
    
  }
}
