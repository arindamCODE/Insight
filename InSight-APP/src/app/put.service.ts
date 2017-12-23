import { Appconfig } from './app.config';
import { ContentID } from './ContentID';
import { Content } from './Content';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class PutService {
    constructor(private http: Http,private appconfig:Appconfig) {

   }

   private url: string =this.appconfig.editor_url ;

   private url1: string;
    content: ContentID;
     
     

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