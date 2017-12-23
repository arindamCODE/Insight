import { Appconfig } from './../app.config';
//Component to show the Dialog box for the confirmaiton of the delete opeartion
import { PreResultComponent } from './../pre-result/pre-result.component';
import { IsDeleteService } from './../IsDelete.service';
import { ContentID } from './../ContentID';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {

  con: ContentID; //Object of the ContentID model class to capture the Data Model from the Backend

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private obj: IsDeleteService,
    private appconfig: Appconfig){}

  //Local properties for capturing the incoming values  
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


  //Function to close the Dialog box
  onNoClick(): void {
    this.dialogRef.close(); 
  } 
  

  //Function to map the incoming values to the local values
  get()
  {
    this.con = this.obj.content1; //Mapping the content1 object of the IsDeleteService

    //Mapping the attributes to the local ones
    this.contentIdDel = this.con.contentId;
    this.userIdDel = this.con.userId;
    this.conDel = this.con.content;
    this.metaTagsDel = this.con.metaTags;
    this.isPrivateDel = this.con.isPrivate;
    this.isGraphCreatedDel = this.con.isGraphCreated;
    this.isFavouritesDel = this.con.isFavourites;
    this.createdByDel = this.con.createdBy;
    this.createdOnDel = this.con.createdOn;
    this.isDeleteDel = this.con.isDelete;
    this.modifiedOnDel = this.con.modifiedOn;

    

    //Calling the setDelContent function of the IsDeleteService
    this.obj.setDelContent(this.contentIdDel, this.userIdDel, this.conDel, this.metaTagsDel, this.isPrivateDel, this.isGraphCreatedDel, this.isFavouritesDel, this.createdByDel, this.createdOnDel, this.isDeleteDel, this.modifiedOnDel);

    //Calling the putDelContent function of the IsDeleteService
    this.obj.putDelContent();

    //Function to reload the opened window
    //window.location.reload();
  }

  ngOnInit(){}
 
}
