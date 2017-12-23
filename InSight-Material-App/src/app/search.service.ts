import { Appconfig } from './app.config';
import { QueryDetails } from './querydetails';

import { Component, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Injectable} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class SearchService{
 constructor(private http:Http,private appconfig:Appconfig){

     console.log('Search Service Constructor');
 }
 private searchUrl = this.appconfig.searchurl;
 public passTerm:string;
 query:QueryDetails;
 returnedresponse:any;
 search(term:string) : Observable<Response>
 {
   this.passTerm=term.toLowerCase();
   console.log(this.passTerm);
   
   this.query=new QueryDetails(this.passTerm);
   let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    console.log(this.query);
   
     return this.http.post(this.searchUrl,JSON.stringify(this.query),options).
     map((response :Response)=>{ response.json();console.log(response);return response;});
    
  }
  

}