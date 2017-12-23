//Service to remove the contents from the Favourites

import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class RemoveFavService {
    constructor(private http: Http, 
        private appconfig: Appconfig) {}

    //Local variables to capture the URLs from the Appconfig to interact with the Backend
    private url: string = this.appconfig.editor_url;
    private url2: string = this.appconfig.apifav_url_update;
    private url3: string;
    private url1: string;

    //Local variables to capture the incoming objects
    content: ContentID;

    //Local attributes to capture the properties of the incoming object
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

    //Function to capture the incoming attributes
    setFavContent(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {
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

    //Function to capture the incoming attributes 
    setFavContent2(set: ContentID) {
        this.contentId = set.contentId;
        this.userId = set.userId;
        this.con = set.content;
        this.metaTags = set.metaTags;
        this.isPrivate = set.isPrivate;
        this.isGraphCreated = set.isGraphCreated
        this.isFavourites = false;
        this.createdBy = set.createdBy;
        this.createdOn = set.createdOn;
        this.isDelete = set.isDelete;
        this.modifiedOn = set.modifiedOn;
        this.putFavContent2(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
    }

    //Function to remove the Contents from the Favourites
    putFavContent(fav: boolean) {

        this.url1 = `${this.url}/${this.contentId}`;
        this.content = new ContentID(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, fav, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }

    //Function to remove the Contents from the Favourites
    putFavContent1(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {
        this.url3 = `${this.url2}/${contentId}`;
        this.content = new ContentID(contentId, userId, content, metaTags, isPrivate, isGraphCreated, isFavourites, createdBy, createdOn, isDelete, modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url3, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }

    //Function to remove the Contents from the Favourites
    putFavContent2(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {
        this.url3 = `${this.url}/${contentId}`;
        this.content = new ContentID(contentId, userId, content, metaTags, isPrivate, isGraphCreated, isFavourites, createdBy, createdOn, isDelete, modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        this.http.put(this.url3, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }
} 