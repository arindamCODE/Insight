import { User } from './../_models/user';

import { UserService } from '../_services/index';
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor  } from '@angular/common';
import {Response, Headers, RequestOptions} from '@angular/http';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormControl, NgModel, FormsModule } from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS, Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
 
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
  selector: 'app-capturepassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})


export class ForgotpasswordComponent  {


 

  public user : User;
  model: any = {};
  loading = false;
 constructor(
      
      private userService: UserService,
      
      private snackBar: MatSnackBar,
      public dialogRef: MatDialogRef<ForgotpasswordComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    onNoClick(): void {
      this.dialogRef.close();
    }

     
        sendemail() {
         
       
          this.loading=false;
          this.userService.sendemail(this.model.email);
          this.snackBar.open('The mail has been sent' ,'close');
          return "this works";
         
      }      
              }   
        
             
             

  


