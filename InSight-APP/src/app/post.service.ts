import { Appconfig } from './app.config';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PostService 
{
    constructor(private http: Http,private appconfig:Appconfig) {}

    private url: string =this.appconfig.editor_url;
    content: Content;

    userId: number;
    con: string;
    metaTags: string;
    createdBy: string;

    id: string;
    


    //private Url: string ="http://localhost:5000/api/ContentDetails";

    postContent(content: string, tags: string) 
    {
        this.id = localStorage.getItem('id');

        this.userId = parseInt(this.id);
        this.con = content;
        this.metaTags = tags;
        this.createdBy = localStorage.getItem('username');

        this.content = new Content(this.userId, this.con, this.metaTags, this.createdBy);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.url,JSON.stringify(this.content),options).catch(this.handleError);

    //    this.http.post(this.url, this.content, options).map(response => response.json())
    //     .subscribe(
    //     () => { console.log('Success') }
    //     );
    }

    private handleError (error: Response | any) 
    {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}