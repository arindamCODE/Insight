import { PutService } from './../put.service';
import { GetIndiService } from './../get.indi.service';
import { ContentID } from './../ContentID';
import { PreResultComponent } from './../pre-result/pre-result.component';
import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

 public content: ContentID;

 contentId: number;
 userId: number;
 con: string;
 metaTags: string;
 isPrivate: boolean;
 isGraphCreated: boolean;
 isFavourites: boolean;
 createdBy: string;
 createdOn: Date;
 isDelete: boolean;
 modifiedOn: Date;

 constructor(private http: Http, private obj: GetIndiService, private obj1: PutService) {

   console.log('this is inside constructor');
    this.content = obj.content1;
    console.log(obj.content1);
    console.log(this.content);
    
  }
  
 
 ngOnInit() {
    
  }

 update(contentId: number, userId: number, content: string, metaTags: string, isPrivate: boolean, isGraphCreated: boolean, isFavourites: boolean, createdBy: string, createdOn: Date, isDelete: boolean, modifiedOn: Date)
  {
   this.contentId = contentId;
   this.userId = userId;
   this.con = content;
   this.metaTags = metaTags;
   this.isPrivate = isPrivate;
   this.isGraphCreated = isGraphCreated;
   this.isFavourites = isFavourites;
   this.createdBy = createdBy;
   this.createdOn = createdOn;
   this.isDelete = isDelete;
   this.modifiedOn = modifiedOn;
   this.obj1.putContent(this.contentId, this.userId, this.con, this.metaTags, this.isPrivate, this.isGraphCreated, this.isFavourites, this.createdBy, this.createdOn, this.isDelete, this.modifiedOn);
  }
}