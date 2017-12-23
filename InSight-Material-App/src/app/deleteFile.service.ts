import { Appconfig } from './app.config';
import { FileID } from './FileID';
import { FileUpload } from './File';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class deleteFileService 
{
    constructor(private http: Http, private appconfig: Appconfig) {}

    private fileDeleteUrl: string = this.appconfig.filesDetailsUrl;

    //Entities required to soft delete the file using Post operation.
    fileToDelete: FileID;
    fileIdToBeDeleted:number;
    contentIdToBeDeleted:number;

    deleteFileDetails(fileId:number,contentId: number, userId: number, filePath:string, fileName:string, fileType:string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) 
    {
        //this.url1 = `${this.url}/${contentId}`;
        this.fileIdToBeDeleted=fileId; //FileId to be deleted
        console.log(this.fileIdToBeDeleted);
        this.contentIdToBeDeleted=contentId;//ContentId to be deleted
        this.fileToDelete = new FileID(fileId,contentId, userId, filePath,fileName,fileType, isPrivate, isGraphCreated, isFavourites, createdBy, createdOn, isDelete, modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.fileDeleteUrl+'/'+this.fileIdToBeDeleted+'/'+this.contentIdToBeDeleted, this.fileToDelete, options)
        .subscribe(
        () => { console.log('Success') }
        );
    }
}