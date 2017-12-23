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

    //Attributes to be initialised from local storage
    userId:number;
    id:string;
    createdBy:string;
    baseurl:string;
    contentIdfileName:number;

 
    //Entities that help create a unique FileName.
    userIdString:string;
    contentIdString:string;

     //Url's for uploading files through the backend controller.
     private amazonS3UploadUrl: string =this.appconfig.amazonUploadUrl;
     private fileSystemUploadUrl:string =this.appconfig.fileuploadurl;

     UploadFiles( files: File[], form: HTMLFormElement,contentId:number)
     {
        //Information obtained from local storage.

        this.id = localStorage.getItem('id');
        this.userId = parseInt(this.id);//UserId in number format.
        console.log('userid is'+this.userId);
        this.contentIdfileName=contentId;//ContentId
        console.log("contentId is "+this.contentIdfileName);

        //Modification made to send unique fileName to AmazonS3 to avoid versioning and overwriting of files
        this.userIdString=this.userId.toString();
        console.log("useridstr is "+this.userIdString);
        this.contentIdString=this.contentIdfileName.toString();
        console.log("contentidstr is "+ this.contentIdString);


        //Assigning form element 'fileinfo' to local form element.
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
                formData.append('UploadedFile', file,this.userIdString+'_'+this.contentIdString+'_'+file.name);//Assigning unique name to the files being uploaded to Amazon S3 by appending userId and contentId
                console.log('#########', formData);     
               
                //Http Post to AmazonS3Upload Controller.
                let headers = new Headers();  
                headers.append('enctype', 'multipart/form-data');  //Important codeline to be included.
                //headers.append('Accept', 'application/json');  
                let options = new RequestOptions({ headers: headers });  
                console.log('***********', formData);
                console.log(options);
                
                this.http.post(this.amazonS3UploadUrl,formData, options)
                .subscribe(  
                data => console.log(formData),  
                error => console.log(error)
                )
            }
        }
    }

}