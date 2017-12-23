//Service to update the database tables

import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PutService {
    constructor(private http: Http, 
        private appconfig: Appconfig) {}

    //Local variables to capture the URLs from the Appconfig to interact with the Backend
    private url: string = this.appconfig.editor_url;
    private url1: string;

    //Local variables to capture the incoming objects
    content: ContentID;

    //Function to update the database table
    putContent(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {

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