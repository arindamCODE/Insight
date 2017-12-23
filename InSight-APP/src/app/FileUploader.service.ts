import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { Appconfig } from './app.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class FileUploaderService 
{
     constructor(private http: Http,private appconfig:Appconfig) {}

     form1: HTMLFormElement;

     //Url's for uploading files through the backend controller.
     private amazonS3UploadUrl: string =this.appconfig.amazonUploadUrl;
     private fileSystemUploadUrl:string =this.appconfig.fileuploadurl;

     UploadFiles( files: File[], form: HTMLFormElement)
     {
        this.form1=form;

        let fileList: File[]=files;
        if (fileList.length > 0) 
        {      
            for( let i=0; i <fileList.length; i++)
            {  
                let file: File = fileList[i];  
                console.log(file);
                console.log(file.name);
                let formData: FormData = new FormData(this.form1);  //Always initialize the Formdata with a valid form defined in HTML section. 
                console.log('this is file', file);
                formData.append('UploadedFile', file,file.name);
                console.log('#########', formData);     
               
                //Http Post to AmazonS3Upload Controller.
                let headers = new Headers();  
                headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
                //headers.append('Accept', 'application/json');  
                let options = new RequestOptions({ headers: headers });  
                console.log('***********', formData);
                console.log(options);
                //let fileSystemUploadUrl = "http://localhost:5000/api/FileSystemUpload";//.catch(error => Observable.throw(error)) 
                //let amazonS3UploadUrl= "http://localhost:5000/api/AmazonS3Upload";
                
                this.http.post(this.amazonS3UploadUrl,formData, options)
                .subscribe(  
                data => console.log(formData),  
                error => console.log(error)
                )
            }
        }
    }

}