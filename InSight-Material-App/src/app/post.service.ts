//Service to post the data in the database table

import { Appconfig } from './app.config';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PostService {
    constructor(private http: Http,
        private appconfig: Appconfig) { }

    //Local variable to capture the URLs from the Appconfig file
    private url: string = this.appconfig.editor_url;

    //Local variable to capture the incoming objects
    content: Content;

    //Local attributes to capture the properties of the incoming object
    userId: number;
    con: string;
    metaTags: string;
    createdBy: string;
    isPrivate: boolean;

    id: string;

    //Function to perform Post operation in the database
    postContent(content: string, tags: string, radio: number) 
    {
        this.id = localStorage.getItem('id');

        this.userId = parseInt(this.id);
        this.con = content;
        this.metaTags = tags;
        this.createdBy = localStorage.getItem('username');

        //Setting the radio button value to update the database
        if(radio == 1)
            this.isPrivate = true;
        else
            this.isPrivate = false;

        this.content = new Content(this.userId, this.con, this.metaTags, this.createdBy, this.isPrivate);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        //HTTP Post opeation
        return this.http.post(this.url, JSON.stringify(this.content), options).catch(this.handleError);

        //    this.http.post(this.url, this.content, options).map(response => response.json())
        //     .subscribe(
        //     () => { console.log('Success') }
        //     );
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}