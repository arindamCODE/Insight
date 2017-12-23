import { ContentID } from './ContentID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetIndiService 
{
    public url: string;
    public content: ContentID;
    public content1: ContentID;

    constructor(private http: Http) {}  

   setContent(content: ContentID)
    {
        this.content1 = content;
    }
}