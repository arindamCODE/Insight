import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PutFavService {
    constructor(private http: Http,private appconfig:Appconfig) {

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

    setFavContent(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date)
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
        this.isDelete = isDelete;
        this.modifiedOn = modifiedOn;
    }

   setFavContent2(set: ContentID) {
       this.contentId = set.contentId;
       this.userId = set.userId;
       this.con = set.content;
       this.metaTags = set.metaTags;
       this.isPrivate = set.isPrivate;
       this.isGraphCreated = set.isGraphCreated; 
       this.isFavourites = true;
       this.createdBy = set.createdBy;
       this.createdOn = set.createdOn;
       this.isDelete = set.isDelete;
       this.modifiedOn = set.modifiedOn;
       this.putFavContent2(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
   }

   putFavContent(fav: boolean)
    {

       this.url1 = `${this.url}/${this.contentId}`;
        this.content = new ContentID(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, fav, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

       this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }

   putFavContent2(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {
       this.url1 = `${this.url}/${contentId}`;
       this.content = new ContentID(contentId, userId, content, metaTags, isPrivate, isGraphCreated, isFavourites, createdBy, createdOn, isDelete, modifiedOn);
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });

       this.http.put(this.url1, this.content, options).map(response => response.json())
           .subscribe(
           () => { console.log('Success') }
           );
   }
}