// import { trigger } from '@angular/animations';
// import { Photo } from './../settingsphoto';
// import { SettingsService } from './../settings.service';
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { Settings } from '../settings';
// import { HttpModule, Headers, RequestOptions, Http } from '@angular/http';
// import { Appconfig } from '../app.config' 
// import { DomSanitizer } from '@angular/platform-browser';

// @Component({
//   selector: 'app-settings',
//   templateUrl: './settings.component.html',
//   styleUrls: ['./settings.component.css']
// })
// export class SettingsComponent implements OnInit {
  
//    public first: string =  "{this.first}";
//    public last: string =  "{this.last}";
//    public user: string =  "{this.user}";
//    public contactNo: string=  "{this.contactNo}";
//    public email: string=  "{this.email}";
//    public photo: string= "{this.photo}";
//    public urlSettings = this.appconfig.apiUrl_settings;
//    public urlAmazon = this.appconfig.apiUrl_amazon;
//    public dangerousUrl='https://s3.ap-south-1.amazonaws.com/testinsight95/{{photo}}';
//    public trustedUrl;
//    public set: Settings;
//    public dp: string;
    



   
//    @ViewChild('fileInput') fileInput;
  
  
//   //  upload(){
//   //   let fileBrowser = this.fileInput.nativeElement;
//   //   console.log("Uploading..");
//   //   if (fileBrowser.files && fileBrowser.files[0]) {
//   //     const formData = new FormData();
//   //     formData.append("image", fileBrowser.files[0]);
//   //     console.log(formData.get("image"),"calling service");
//   //     this.obj.upload(formData).subscribe(res => {
//   //     });
//   //   }
//   //  }

//   // constructor(private sanitizer: DomSanitizer) {
//   //   // javascript: URLs are dangerous if attacker controlled.
//   //   // Angular sanitizes them in data binding, but you can
//   //   // explicitly tell Angular to trust this value:
//   //   this.dangerousUrl = 'javascript:alert("Hi there")';
//   //   this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

//   constructor(private obj: SettingsService,private http:Http,private appconfig:Appconfig,private sanitizer: DomSanitizer )
//    {
//      this.first = this.obj.returnFName();
//      this.last = this.obj.returnLName();
//      this.user = this.obj.returnUName();
//      this.email=this.obj.returnemail();
//      this.contactNo=this.obj.returncontactNo();
//      this.photo=this.obj.returnphoto();
//      this.dangerousUrl = 'javascript:alert("Continue")';
//      this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);

     
//      console.log(this.first);
  
//      // this.set = this.obj.set;
//      // this.first = this.set.firstName;
//      // console.log(this.set);
//      // console.log(this.first);
//     }

    
  
//    //  get(set: Settings)
//    //  {
//    //     this.set = set;
//    //     this.first = this.set[0].firstName;
//    //     console.log(set);
//    //     console.log(this.first);
//    //  }
  
//    //  setName(first: string)
//    //  {
//    //     this.first = first;
//    //     console.log(this.first);
//    //  }


  
  
//    ngOnInit() {

    
//     this.http.get(this.urlSettings).toPromise().then(result => {
//       this.set = result.json() as Settings;
//       this.trigger();
//       this.getPhoto();
//   }, error => console.error(error));

  
  
// }


//   trigger(){
//     this.first = this.set[0].firstName;
//     this.last = this.set[0].lastName;
//     this.user = this.set[0].username;
//     this.email = this.set[0].email;
//     this.contactNo=this.set[0].contactNo;
//     this.photo=this.set[0].photo;
//     console.log(this.set[0]);
//     console.log(this.photo);
//     console.log(this.first);
//     console.log(this.last);
//     console.log(this.email);
//     console.log(this.photo);
//     this.obj.getContent(this.first,this.last,this.user,this.email,this.contactNo,this.photo);
//      }

//   getPhoto(){
//     console.log("photo name is -" + this.photo);
//     this.http.get(this.urlAmazon + '/' +this.photo ).subscribe(res => console.log(res));
//     console.log("second get");
  

//   }

   
   
  
    

  
  

 
     
//     update(firstName,lastName)
//     {
//       console.log("calling the fn ..")
//       this.obj.updateS(firstName, lastName);
//     }

//     updatecontact(contactNo)
//     {
//       console.log("calling the contactfn .."); 
//       console.log(contactNo);     
//       this.obj.updatescontact(contactNo);
//     }

//     upload(file)
//     {
//       console.log("calling the upload in component.ts");
//       this.obj.uploadPhoto(file);
//     }

//     updateemail(email)
//     {
//       console.log("calling the contactfn .."); 
//       console.log(email);     
//       this.obj.updatesemail(email);
//     }

//      image2: string;

//      uploadimage ( image:string )
//      {
//         this.image2=image;

//         let headers=new Headers();
//         headers.append('Content-type','application/json');  
//         let options = new RequestOptions({ headers: headers });  
//         let apiUrl = "http://localhost:5000/api/SettingsPhoto";
//         let json =  JSON.stringify(this.image2) ;
//         console.log("reached post");
//         console.log(json);
//         this.http.post(apiUrl, json , options)
//         .subscribe(  
//         data => console.log(data),  
//         error => console.log(error)
//         )

//      }
  
//   }