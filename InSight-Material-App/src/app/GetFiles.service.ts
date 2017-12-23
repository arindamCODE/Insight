import { FileID } from './FileID';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GetFilesService 
{
    public file: FileID;
    public file1: FileID;

    constructor(private http: Http){}  

    GetFiles(file: FileID)
    {
        this.file1 = file;
    }
}