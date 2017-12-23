//Service to perform delete operation

import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class DeleteService
{
    constructor(private http: Http,
        private appconfig:Appconfig) {}

    //Local variables to capture the URLs from the Appconfig to interact with the Backend
    private url: string = this.appconfig.editor_url;
    private url1: string;

    //Local object to capture the incoming object
    content: ContentID;

    //Function to delete from the database
    deleteContent(id: number)
    {
        this.url1 = `${this.url}/${id}`;

        //HTTP Delete operation
        this.http.delete(this.url1).subscribe(
            () => { console.log('Success') }
            );
    }

}