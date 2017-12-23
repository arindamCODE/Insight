import { Appconfig } from './app.config';
import { ShareDetails } from './shareddetails';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class fetchIDsService {
    public common_ContentID: any;
    public common_FileID:any;
    public common_SharedBy:any;
    public common_CreatedBy: any;
    public headers: Headers;
    public getFileIDUrl: any;
    public getCreateByUrl :any;
    public getSharedWithUrl: any;
    public postInContentShare: any;
    constructor(public http:Http, private config: Appconfig ){

        this.getFileIDUrl = this.config.getfileidurl;
        this.getCreateByUrl = this.config.getcreatedbyurl;
        this.getSharedWithUrl = this.config.getsharedwithurl;
        this.postInContentShare = this.config.postincontentshareurl;
        
    }
    getdropdown(searchletters: string){
        this.headers = new Headers({'Content-Type':'application/json'});
        return this.http.get(('http://localhost:5555/api/UserDetails/GetClientList/term?term='+searchletters+''),{headers:this.headers})
    }
    getFileID(trial_User_userID: any,trial_contentID: any){
        this.headers = new Headers({'Content-Type':'application/json'});
        return this.http.get((this.getFileIDUrl+trial_User_userID+'/'+trial_contentID+''),{headers:this.headers})
    }
    getCreatedBy(trial_User_userID: any){
        this.headers = new Headers({'Content-Type':'application/json'});
        return this.http.get((this.getCreateByUrl+trial_User_userID+''),{headers:this.headers})
    }

    getSharedWith(trial_Recipients_name: any){
        this.headers = new Headers({'Content-Type':'application/json'});
        return this.http.get((this.getSharedWithUrl+trial_Recipients_name+''),{headers:this.headers})
    }

    postinContentshare(passterm: ShareDetails){
        this.headers = new Headers({'Content-Type':'application/json'});
        this.http.post(this.postInContentShare,JSON.stringify(passterm),{headers:this.headers}).toPromise().catch();
    }
    
}