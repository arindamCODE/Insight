import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class DeleteService
{
    constructor(private http: Http,private appconfig:Appconfig) {}

   private url: string = this.appconfig.editor_url;
    private url1: string;
    content: ContentID;

   deleteContent(id: number)
    {
        this.url1 = `${this.url}/${id}`;
        this.http.delete(this.url1).subscribe(
            () => { console.log('Success') }
            );
    }

}