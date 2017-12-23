// import { SettingsComponent } from './settings/settings.component';
// import { Settings } from './settings';
// import { Injectable } from '@angular/core';
// import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map';
// import { Appconfig } from './app.config';
// import { Photo } from './settingsphoto' ;
// import { User } from './_models/index';
// import { concat } from 'rxjs/observable/concat';



// @Injectable()



// export class SettingsService 
// {
//   public set: Settings;
//   public first: string;
//   public last: string;
//   public user: string;
//   public email: string;
//   public contactNo:  string;

//   constructor(private http: Http,private config: Appconfig) {}  

//   getContent(fname: string, lname:string, uname:string, email:string, contactNo:string)
//   {
//       this.first = fname;
//       this.last = lname;
//       this.user = uname;
//       this.email = email;
//       this.contactNo =  contactNo;
//       console.log(this.email);
//     //  this.http.get(this.url).map(content => this.content);
//   }

//   updateS(firstName, lastName) {
//     console.log("reached service");
//     console.log(firstName);
//     console.log(lastName);
  
//     let  headers= new Headers();
//     headers.append('Content-Type','application/json');
//     let json=  JSON.stringify({userid:"9",firstName:firstName, lastName:lastName});
//     console.log(json);
//     return this.http.patch(this.config.apiUrl_settings ,json, {headers:headers}).toPromise().catch();
// }

// updatesemail(email) {
//   console.log("reached service");
//   let  headers= new Headers();
//   headers.append('Content-Type','application/json');
//   console.log(email);
//   let json=  JSON.stringify({userid:"9",email:email});
//   console.log(json);
//   return this.http.patch(this.config.apiUrl_settings  ,json, {headers:headers}).toPromise().catch();
// }

// updatescontact(contactNo) {
//   console.log("reached service");
//   let  headers= new Headers();
//   headers.append('Content-Type','application/json');
//   console.log(contactNo);
//   let json=  JSON.stringify({userid:"9",contactNo:contactNo});
//   console.log(json);
//   return this.http.patch(this.config.apiUrl_settingscontact  ,json, {headers:headers}).toPromise().then(res => console.log(res.json)).catch();
// }

// form1: HTMLFormElement;

//     uploadPhoto( files: File[])
//     {
//        var form=document.forms.namedItem("fileinfo");

//        let fileList: File[]=files;
//        if (fileList.length > 0)
//        {      
//            for( let i=0; i <fileList.length; i++)
//            {  
//                let file: File = fileList[i];  
//                console.log(file);
//                console.log(file.name);
//                console.log(this.first);
//                let formData: FormData = new FormData(form);  //Always initialize the Formdata with a valid form defined in HTML section.
//                console.log('this is file', file);
//                let fileName = this.first  + "9_dp";
//                formData.append('UploadedFile', file,fileName);
//                console.log(fileName);
//                console.log('#########', formData);    
//                let headers = new Headers();  
//                headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
//                // headers.append('Accept', 'application/json');  
//                let options = new RequestOptions({ headers: headers });  
//                console.log(formData);
//                console.log(options);
//                let apiUrl1 = "http://localhost:5000/api/SettingsPhoto/9";//.catch(error => Observable.throw(error))
//                let apiUrl= "http://localhost:5000/api/AmazonS3Upload";
//                this.http.post(apiUrl,formData, options)
//                .subscribe(
//                data => console.log(formData),  
//                error => console.log(error)
//                )
//                headers.append('Content-Type','application/json');
//                let json=  JSON.stringify({userid:"9",Photo:fileName});
//                console.log(json);
//                return this.http.patch(apiUrl1 ,json, {headers:headers}).toPromise().catch();
           
//            }
//        }
//    }



   
//       //   form1: HTMLFormElement;
    
//       //   upload( files: File[], form: HTMLFormElement)
//       //   {
//       //      this.form1=form;
    
//       //      let fileList: File[]=files;
//       //      if (fileList.length > 0)
//       //      {      
//       //          for( let i=0; i <fileList.length; i++)
//       //          {  
//       //              let file: File = fileList[i];  
//       //              console.log(file);
//       //              console.log(file.name);
//       //              let formData: FormData = new FormData(this.form1);  //Always initialize the Formdata with a valid form defined in HTML section.
//       //              console.log('this is file', file);
//       //              formData.append('UploadedFile', file,file.name);
//       //              console.log('#########', formData);    
//       //              let headers = new Headers();  
//       //              headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
//       //              // headers.append('Accept', 'application/json');  
//       //              let options = new RequestOptions({ headers: headers });  
//       //              console.log('***********', formData);
//       //              console.log(options);
//       //              let apiUrl1 = "http://localhost:5000/api/settingsphoto";//.catch(error => Observable.throw(error))
//       //              let apiUrl2= "http://localhost:5000/api/AmazonS3Upload";
//       //              this.http.post(apiUrl2,formData, options)
//       //              .subscribe(  
//       //              data => console.log(formData),  
//       //              error => console.log(error)
//       //              )
//       //          }
//       //      }
//       //  }
    
    
//   returnFName(): string
//   {
//     return this.first;
//   }
//   returnLName(): string
//   {
//     return this.last;
//   }
//   returnUName(): string
//   {
//     return this.user;
//   }
//   returnemail(): string
//   {
//     return this.email;
//   }
//   returncontactNo(): string
//   {
//     return this.contactNo;
//   }
//   // updateS(firstName, lastName){
//   //   this.http.put(url, firstName, lastName).subscribe();
//   // }

 
//       }
  
  
