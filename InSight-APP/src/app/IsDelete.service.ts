import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class IsDeleteService {
    constructor(private http: Http, private appconfig:Appconfig) {

   }

   private url: string = this.appconfig.editor_url;

   private url1: string;
    content: ContentID;

    contentId: number;
    userId: number;
    con: string;
    metaTags: string;
    isPrivate: boolean;
    isGraphCreated: boolean;
    isFavourites: boolean;
    createdBy: string;
    createdOn: Date;
    isDelete: boolean;
    modifiedOn: Date; 

    setDelContent(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) 
    {
        this.contentId = contentId;
        this.userId = userId;
        this.con = content;
        this.metaTags = metaTags;
        this.isPrivate = isPrivate;
        this.isGraphCreated = isGraphCreated;
        this.isFavourites = isFavourites;
        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.isDelete = true;
        this.modifiedOn = modifiedOn;
    }
    
   putDelContent()
    {
        this.url1 = `${this.url}/${this.contentId}`;
        this.content = new ContentID(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

       this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
}