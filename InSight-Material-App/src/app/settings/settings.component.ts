import { MatSnackBar } from '@angular/material';
import { ChangepasswordComponent } from './../changepassword/changepassword.component';
import { trigger } from '@angular/animations';
//  import { Photo } from './../settingsphoto';
import { SettingsService } from './../settings.service';
import { Component, OnInit, ViewChild,  Input } from '@angular/core';
import { Settings } from '../settings';
import { HttpModule, Headers, RequestOptions, Http } from '@angular/http';
import { Appconfig } from '../app.config';

import { DomSanitizer } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

   public first: string ;
   public last: string;
   public user: string;
   public contactNo: string;
   public email: string;
   @Input() photoUrl: string;
   public urlSettings = this.appconfig.apiUrl_settings;
   public urlAmazon = this.appconfig.apiUrl_amazon;
   public set: Settings;
   public dp: string;
   public local: string = localStorage.getItem('id');
   private show1 = true;
   private show2 = true;
   private show3 = true;
   public  Name: string = this.first + this.last;
   public dob: string;
   d3Display: boolean;
   uploadBox: boolean;
   button: any;
   d3: any;



   @ViewChild('fileInput') fileInput;
  
  
  
  constructor(private obj: SettingsService,private http:Http,private appconfig:Appconfig,private sanitizer: DomSanitizer ,public dialog: MatDialog )
   {
     this.first = this.obj.returnFName();
     this.last = this.obj.returnLName();
     this.user = this.obj.returnUName();
     this.email = this.obj.returnemail();
     this.contactNo = this.obj.returncontactNo();
     this.photoUrl = this.obj.returnphotoUrl();
     console.log(this.first);
     
    }



    

    
  
     
   ngOnInit() {
    this.d3Display = false;
    this.uploadBox = true;
    console.log('id is ' + this.local);
    this.http.get(this.urlSettings  + this.local).toPromise().then(result => {
      console.log(result);
      this.set = result.json() as Settings;
      this.trigger();
      this.obj.photoUrl = this.set[0].photoUrl; 
      console.log(this.set[0].photoUrl, "duqhbwoianhhdoi");
      console.log(this.obj.photoUrl);
      this.obj.photoSource.next(this.obj.photoUrl);
      // this.obj.getPhoto().subscribe(res => console.log(res));
    }, error => console.error(error));
  }

  display() {
    this.show1 = true;
    this.show2 = true;
    this.show3 = true;
    console.log('!!!!!!!!!!!!!!!!!!!');
  }




  trigger() {
    this.first = this.set[0].firstName;
    this.last = this.set[0].lastName;
    this.user = this.set[0].username;
    this.email = this.set[0].email;
    this.contactNo = this.set[0].contactNo;
    this.photoUrl =  this.set[0].photoUrl;
    this.dob = this.set[0].dob;
    // this.obj.photoUrl = this.photoUrl;
    this.dob = this.set[0].dob.slice(0, 10);
    if (this.dob == '0001-01-01')
      {
        this.dob='';
      }
    this.Name = this.first + ' '  + this.last;
    console.log(this.set[0]);
    console.log(this.photoUrl);
    console.log(this.first);
    console.log(this.last);
    console.log(this.email);
    console.log(this.photoUrl);
    console.log(this.dob);
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(ChangepasswordComponent, {
      width: '250px',
      
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });}
  
   
   
  
    


      update(firstName, lastName) {
      const str = localStorage.getItem('id');
      console.log('calling the fn ..');
      this.obj.updateS(firstName, lastName, str);
    }

    updateuser(user) {
      const str = localStorage.getItem('id');
      console.log('id');
      this.obj.updateSuser(user, str);
      this.show1 = false;
    }

    updatecontact(contactNo){
      console.log(' calling the contactfn ..');
      console.log(contactNo);
      this.obj.updatescontact(contactNo, this.local);
      this.show2 = false;
    }

    upload(file)
    {
      console.log('inphotofn' + this.local);
      console.log('calling the upload in component.ts');
      this.obj.uploadPhoto(file, this.local);
    }

    updatedob(dob) {
      console.log((dob)) ;
      this.obj.updatesdob(dob, this.local);
      this.show3  = false;
    }

     showMore() {
       console.log('testing the change photo btn');
        this.uploadBox = false;
        this.d3Display = true;
    }

    showLess() {
       this.d3Display = false;
       this.uploadBox  = true;
    }

    updateemail(email) {
      console.log('calling the contactfn ..');
      console.log(email);
      this.obj.updatesemail(email, this.local);
    }

    refresh(): void {
    window.location.reload();
    }

    
  }
