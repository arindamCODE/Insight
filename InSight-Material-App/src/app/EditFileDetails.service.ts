import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { FileEdit } from './FileEdit'; //Model used to upload filedetails to the backend.
import { FileID } from './FileID';
import { Content } from './Content';
import { Appconfig } from './app.config';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FileDetailsEditService 
{
     constructor(private http: Http,private appconfig:Appconfig) {}

     //For File Uploads.
     fileName:string;
     fileType:string;
     filePath:string;
     contentId:number;

     //For else condition.
     fileName2: string = null;
     fileType2: string = null;
     filePath2: string = null;

     //private apiUrl2: string ="http://localhost:5000/api/ContentDetails";
     private fileDetailsUploadUrl:string =this.appconfig.filesDetailsUrl;
     content: Content;
     //receiveContent:ReceiveContentDetails;

     //Attributes to be initialised from local storage
     fileId:number;
     userId:number;
     id:string;
     createdBy:string;
     baseurl:string;

     //Entities that help create a unique FileName.
     userIdString:string;
     contentIdString:string;

     //Object used for posting fileDetails.
     fileDetailsEdit:FileID;
     //fileDetailsPostWithoutFiles:FileUpload;

     //boolean entities
     isPrivateSave:boolean;
     isFavouritesSave:boolean;
     isDeleteSave:boolean;
     isGraphSave:boolean;
     createdOnSave:Date;
     modifiedOnSave:Date;

    EditFileDetails( files: File[], form: HTMLFormElement, contentIDparameter:number, fileIdparameter:number,isPrivatesavefile:boolean,isfavouritessavefile:boolean,isDeletesavefile:boolean,isGraphsavefile:boolean,createdOnsavefile:Date,modifiedOnsavefile:Date )
    {
        //Information obtained from local storage.
        this.id = localStorage.getItem('id');
        this.userId = parseInt(this.id);//UserId
        this.createdBy = localStorage.getItem('firstName');//Username
        this.contentId=contentIDparameter;//ContentId
        this.fileId=fileIdparameter;//fileId
        this.isPrivateSave=isPrivatesavefile;
        //console.log("isPrivate inside savefile "+this.isPrivateSave)
        this.isFavouritesSave=isfavouritessavefile;
        //console.log("isFavourite inside savefile "+this.isFavouritesSave)
        this.isDeleteSave=isDeletesavefile;
        //console.log("isDelete inside savefile "+this.isDeleteSave)

        //Modification made to send unique fileName to AmazonS3 to avoid versioning and overwriting of files
        this.userIdString=this.userId.toString();
        this.contentIdString=this.contentId.toString();

        this.isGraphSave=isGraphsavefile;
        this.createdOnSave=createdOnsavefile;
        this.modifiedOnSave=modifiedOnsavefile;

        //BaseUrl to obtain link of files uploaded in amazon s3
        this.baseurl="https://s3.ap-south-1.amazonaws.com/testinsight95/";
        
        let fileList: File[]=files;

        if (fileList.length > 0) 
        {      
            for( let i=0; i <fileList.length; i++)
            {  
                let file: File = fileList[i];  
                console.log(file);
                console.log(file.name);
                console.log(file.type);

                //Initialising local variables with the parameters obtained from function to be passed as initalizers of the FileDetails constructor in order to avoid "Undefined" error.
                this.fileName=this.userIdString+'_'+this.contentIdString+'_'+file.name;
                console.log("filename in editsave "+this.fileName);//Get the filename of the current file
                this.fileType=file.type;
                this.filePath=this.baseurl+this.fileName;
                console.log(this.filePath);

                //Pass the details within body as JSON to map the data with he database model and post correctly.

                // let body = {
                //     "contentID":contentID,
                //     "filename":this.fileName,
                //     "filetype":this.fileType
                // };

                //console.log("Body of transferred file is "+body);

                //this.fileDetailsEdit=new FileEdit(this.fileId,this.userId,this.contentId,this.filePath,this.fileName,this.fileType,this.createdBy,this.isPrivateSave,this.isFavouritesSave,this.isDeleteSave);
                this.fileDetailsEdit=new FileID(this.fileId,this.userId,this.contentId,this.filePath,this.fileName,this.fileType,this.isPrivateSave,this.isGraphSave,this.isFavouritesSave,this.createdBy,this.createdOnSave,this.isDeleteSave,this.modifiedOnSave);
                console.log(this.fileDetailsEdit);

                //Http Post Code to UserFileDetails
                let headers = new Headers();    
                headers.append('Content-Type', 'application/json');  
                let options = new RequestOptions({ headers: headers });  
                
                //let apiUrl1 = "http://localhost:5000/api/FilesDetails"; 
                this.http.put(this.fileDetailsUploadUrl+'/'+this.fileId,this.fileDetailsEdit, options)
                .subscribe(  
                success => console.log("success"),  
                error => console.log(error)
                )
            }
        }

        // else
        // {
        //     this.fileDetailsPostWithoutFiles=new FileUpload(this.userId,this.contentId,this.filePath2,this.fileName2,this.fileType2,this.createdBy)
            
        //     //Http Post Code to FileTable
        //     let headers = new Headers();    
        //     headers.append('Content-Type', 'application/json');  
        //     let options = new RequestOptions({ headers: headers });  
            
        //     //let apiUrl1 = "http://localhost:5000/api/FilesDetails"; 
        //     this.http.post(this.fileDetailsUploadUrl,JSON.stringify(this.fileDetailsPostWithoutFiles), options)
        //     .subscribe(  
        //     data => console.log(data),  
        //     error => console.log(error)
        //     )
        // }
    }

}