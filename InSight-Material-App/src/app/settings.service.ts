import { MatSnackBar } from '@angular/material';
import { SettingsComponent } from './settings/settings.component';
import { Settings } from './settings';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Appconfig } from './app.config';
// import { Photo } from './settingsphoto' ;
import { User } from './_models/index';
import { concat } from 'rxjs/observable/concat';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';



 @Injectable()



export class SettingsService {
  public set: Settings;
  public first: string;
  public last: string;
  public user: string;
  public email: string;
  public photoUrl: string;
  
  public contactNo:  string;
  public photo_Url = new Subject<string>();
  public local: string = localStorage.getItem('id');
  public  photoSource= new Subject<string>();
  public photo_Url$ = this.photoSource.asObservable();
  
  publishData(data: string) {
    this.photo_Url.next(data);
  }

  constructor(private http: Http, private config: Appconfig,  private snackBar: MatSnackBar) {}

  getContent(fname: string, lname: string, uname: string, email: string, contactNo: string, photoUrl: string)
  {
      this.first = fname;
      this.last = lname;
      this.user = uname;
      this.email = email;
      this.contactNo =  contactNo;
      this.photoUrl =  photoUrl;
      console.log(this.email);
  }

  // getPhoto() {
  //   console.log("error in getPhoto");
  //   return this.http.get(this.config.apiUrl_amazon)
  //       .map( (response: Response) => response.json());
     
  // }

  getData() {
    return this.http.get(this.config.apiUrl_settings + this.local)
        .map((response: Response) =>  {
          response = response.json();
          
        });
  }

  updateS(firstName, lastName, local) {
    console.log('reached service');
    console.log(firstName);
    console.log(lastName);
    const headers = new Headers();
    headers.append('Content-Type',  'application/json');
    const json =  JSON.stringify({userid: local, firstName: firstName, lastName: lastName});
    console.log(json);
    return this.http.patch(this.config.apiUrl_settings , json, {headers: headers}).toPromise().catch();
}

updateSuser(user, local) {
  console.log('reached service');
  console.log(user);
  console.log(' in user ' + local);

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const json =  JSON.stringify({userid: local, userName: user});
  console.log(json);
  return this.http.patch(this.config.apiUrl_settings + local , json, {headers: headers})
      .subscribe (
        data => {
          this.snackBar.open('UserName Updated !!', 'Close', {
            duration: 1700
          });
        },
      );

    }

  updatesdob  (dob, local) {
    let  headers= new Headers();
    headers.append('Content-Type', 'application/json');
    let json=  JSON.stringify({userid: local, dob: dob});
    console.log(json);
    return this.http.patch(this.config.apiUrl_settingsdob + local , json, {headers: headers}).subscribe (
      data => {
        this.snackBar.open('DOB Updated !!', 'Close', {
          duration: 1700
        });
      },
    );
  }

  updatesemail(email, local) {
    console.log('reached service');
    let  headers= new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(email);
    let json=  JSON.stringify({userid: local, email: email});
    console.log(json);
    return this.http.patch(this.config.apiUrl_settings  ,json, {headers:headers}).subscribe (
      data => {
        this.snackBar.open('UserName Updated !!', 'Close', {
          duration: 1700
        });
      },
    );
  }

  updatescontact(contactNo, local) {
    let  headers= new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(contactNo);
    let json=  JSON.stringify({userid: local, contactNo: contactNo});
    console.log(json);
    return this.http.patch(this.config.apiUrl_settingscontact + local , json, {headers: headers})
    .subscribe (
      data => {
        this.snackBar.open('Contact Number Updated !!', 'Close', {
          duration: 1700
        });
      },
    );
  }

  form1: HTMLFormElement;
  
    uploadPhoto( files: File[], local)
    {
       var form = document.forms.namedItem('fileinfo');

       let fileList: File[] = files;
       if (fileList.length > 0)
       {
           for ( let i = 0; i < fileList.length; i++)
           {
               let file: File = fileList[i];
               console.log(file);
               let formData: FormData = new FormData(form);  //Always initialize the Formdata with a valid form defined in HTML section.
               console.log('this is file', file);
               let fileName = local + '-dp';
               formData.append('UploadedFile', file, fileName);
               console.log(fileName);
               console.log('#########', formData);    
               let headers = new Headers();  
               headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
               // headers.append('Accept', 'application/json');  
               let options = new RequestOptions({ headers: headers });  
               console.log(formData);
               console.log(options);
               let apiUrl1 = this.config.apiUrl_settingsPhoto + local;//.catch(error => Observable.throw(error))
               let apiUrl= this.config.apiUrl_amazon;
               this.http.post(apiUrl,formData, options)
               .subscribe(
               data => console.log(formData),  
               error => console.log(error)
               )
               headers.append('Content-Type','application/json');
               let json=  JSON.stringify({userid:local,photoUrl:fileName});
               console.log(json);
               return this.http.patch(apiUrl1 ,json, {headers:headers}).toPromise().catch();
           
           }
       }
   }


  returnFName(): string
  {
    return this.first;
  }
  returnLName(): string
  {
    return this.last;
  }
  returnUName(): string
  {
    return this.user;
  }
  returnemail(): string
  {
    return this.email;
  }
  returncontactNo(): string
  {
    return this.contactNo;
  }
  returnphotoUrl(): string
  {
    return this.photoUrl;
  }
  
 
      }
  
  
;