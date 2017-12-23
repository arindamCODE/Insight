import { IsDeleteService } from './../IsDelete.service';
import { Appconfig } from './../app.config';
import { RemoveFavService } from './../remove.fav.service';
import { ViewService } from './../view.service';
import { ViewComponent } from './../view/view.component';
import { PutFavService } from './../put.fav.service';
import { DeleteService } from './../delete.service';
import { EditComponent } from './../edit/edit.component';
import { GetIndiService } from './../get.indi.service';
import { ContentID } from './../ContentID';
import { Component, OnInit, Injectable } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { FileID } from '../FileID'

@Component({
  selector: 'app-pre-result',
  templateUrl: './pre-result.component.html',
  styleUrls: ['./pre-result.component.css']
})

export class PreResultComponent implements OnInit {

  public ID: string;
  public id: number;
  public id2: number;
  public id3: number;
  public content: ContentID[];
  public content1: ContentID[];
  public url: string;
  public url2: string;
  public value: string;
  public tags: string;
  public index: number;
  public con: string;
  public favourite: boolean;
  public favourite1: boolean;
  public users: string;
  public con2: ContentID; 
  public con5: ContentID;

  public sample: string;
  public limit: number = 200;
  public dots: string = "....";

  contentIdDel: number;
  userIdDel: number;
  conDel: string;
  metaTagsDel: string;
  isPrivateDel: boolean;
  isGraphCreatedDel: boolean;
  isFavouritesDel: boolean;
  createdByDel: string;
  createdOnDel: Date;
  isDeleteDel: boolean;
  modifiedOnDel: Date; 



  public confav: ContentID;

 constructor(private http: Http, private obj: GetIndiService, private obj1: DeleteService, private obj2: PutFavService, private obj3: ViewService, private obj4: RemoveFavService,private appconfig:Appconfig, private obj5: IsDeleteService)
  {
    this.url=this.appconfig.editor_url;
   http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isDelete == false);
    }, error => console.error(error));
  }

  edit(con: ContentID)
  {
    console.log(con);
    this.obj.setContent(con);
  }

 view(content: ContentID)
  {
    this.con2 = content;
    this.favourite = true;
    this.favourite1 = false;
    this.obj3.show(this.con2);
    this.obj2.setFavContent(this.con2.contentId, this.con2.userId, this.con2.content, this.con2.metaTags, this.con2.isPrivate, this.con2.isGraphCreated, this.favourite, this.con2.createdBy, this.con2.createdOn, this.con2.isDelete, this.con2.modifiedOn);
    this.obj4.setFavContent(this.con2.contentId, this.con2.userId, this.con2.content, this.con2.metaTags, this.con2.isPrivate, this.con2.isGraphCreated, this.favourite, this.con2.createdBy, this.con2.createdOn, this.con2.isDelete, this.con2.modifiedOn);
  }

  addDots(con: ContentID)
  {
    this.sample = con.content;

    if(this.sample.length > this.limit)
      {
        this.sample = this.sample.substring(0, this.limit) + this.dots;
      }

    return this.sample;
  }

  preDelete(content: ContentID)
  {
    this.con5 = content;

    this.contentIdDel = this.con5.contentId;
    this.userIdDel = this.con5.userId;
    this.conDel = this.con5.content;
    this.metaTagsDel = this.con5.metaTags;
    this.isPrivateDel = this.con5.isPrivate;
    this.isGraphCreatedDel = this.con5.isGraphCreated;
    this.isFavouritesDel = this.isFavouritesDel;
    this.createdByDel = this.con5.createdBy ;
    this.createdOnDel = this.con5.createdOn;
    this.isDeleteDel = this.con5.isDelete;
    this.modifiedOnDel = this.con5.modifiedOn; 
    

   this.obj5.setDelContent(this.contentIdDel, this.userIdDel, this.conDel, this.metaTagsDel, this.isPrivateDel, this.isGraphCreatedDel, this.isFavouritesDel, this.createdByDel, this.createdOnDel, this.isDeleteDel, this.modifiedOnDel);    
 }

 delete()
  {
    this.obj5.putDelContent();
    window.location.reload();
  }

  change(content: ContentID)
  {
    this.confav = content;
    this.obj2.setFavContent2(this.confav);
  }

  change1(content: ContentID) {
    this.confav = content;
    this.obj4.setFavContent2(this.confav);
  }

  reload() {
    window.location.reload();
  }
 
  ngOnInit() {
    
  }

  //Modifications added to get the filename.

  userid:number;
  useridstr:string;
  filedetails:FileID[];
  contentId:number;

  showfiles(con:ContentID)
  {
    this.useridstr = localStorage.getItem('id');
    this.userid=parseInt(this.useridstr);
    this.contentId=con.contentId;

    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'text/plain');  

    // let myParams = new URLSearchParams();
    // myParams.set('contentId', contentId.toString());
    // myParams.set('userId', this.userid.toString());

    let options=new RequestOptions({headers:myHeaders});

    this.http.get("http://localhost:5050/api/FilesDetails"+"/"+this.contentId+"/"+this.userid).subscribe(res=>this.filedetails=res.json() as FileID[]);

  }


}