//Service used to Update the database table with the update of the IsDelete column

import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class IsDeleteService {
    constructor(private http: Http,
        private appconfig: Appconfig) {}

    //Local variables to capture the URLs from the Appconfig file    
    private url: string = this.appconfig.editor_url;
    private url1: string;


    private newUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
    newUser = this.newUserSubject.asObservable();

    //Local variables to capture the incoming objects
    content: ContentID;
    content1: ContentID;

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

    //Function to set the local variables from the incoming properties to update in the database 
    setDelContent(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date) {
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

    //Update the database table with the local attributes
    putDelContent() {

        this.newUserSubject.next({id:this.contentId});    

        this.url1 = `${this.url}/${this.contentId}`;
        this.content = new ContentID(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //HTTP Put operation
        this.http.put(this.url1, this.content, options).map(response => response.json())
            .subscribe(
            () => { console.log('Success') }
            );
    }

    //Function to get the data from the dashboard
    get(con: ContentID)
    {
        //Setting the local value from the incoming object
        this.content1 = con;
    }

}