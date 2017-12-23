//Component to show all the contents that have been uploaded by the User

import { SharewithdialogComponent } from './../sharewithdialog/sharewithdialog.component';
import { UserDetails } from './UserDetails';
import { fetchIDsService } from './../fetchIDs.service';
import { UserFileDetails } from './UserFileDetails';
import { Observable } from 'rxjs';
import { RemoveFromFavDialogComponent } from './../remove-from-fav-dialog/remove-from-fav-dialog.component';
import { AddToFavDialogComponent } from './../add-to-fav-dialog/add-to-fav-dialog.component';
import { DeleteDialogComponent } from './../delete-dialog/delete-dialog.component';
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
import { Component, OnInit, Injectable, Inject,ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { MatDialog} from '@angular/material';
import { DataSource } from "@angular/cdk/collections"

@Component({
  selector: 'app-pre-result',
  templateUrl: './pre-result.component.html',
  styleUrls: ['./pre-result.component.css']
})

export class PreResultComponent implements OnInit {

  //New element added 
  //dataSource: eDataSource;
  p: number = 1;
  public ID: string;
  public id: number;
  public id2: number;
  public id3: number;

  //Local objects to capture the incoming ContentID objects
  public content: ContentID[];
  public content1: ContentID[];
  public content2: ContentID[];
  public content3: ContentID[];

  //Local strings to take API addresses from Appconfig
  public url: string;
  public url2: string;

  public value: string;
  public tags: string;
  public index: number;
  public con: string;

  //Local variables to change the IsFavourite status of the recieved object
  public favourite: boolean;
  public favourite1: boolean;

  public users: string;

  //Local objects to make changes in the incoming objects
  public con2: ContentID;
  public con5: ContentID;

  public trial_contentID: any;
  public trial_User_userID: any;
  public trial_fileID: any;
  public trial_Createdby: any;
  public fake:boolean=false;

  public sample: string; //String to recieve the content of the incoming object so that it can be reduced if the number of letters to show is more
  public limit: number = 500; //Number words the view is limited to
  public dots: string = "...."; //Appending these dots at the end of the text if it is exceeding the limit

  //Local variables to change the IsDelete property of the incoming object
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

  //Local object to catch the incoming object to change the IsFavourite status of the object
  public confav: ContentID;

  public date: any;
 
  constructor(public fetchidservice: fetchIDsService,private http: Http, private obj: GetIndiService,
     private obj1: DeleteService, private obj2: PutFavService, 
     private obj3: ViewService, private obj4: RemoveFavService,
      private appconfig: Appconfig, private obj5: IsDeleteService,
       public dialog: MatDialog ) {
         
    this.url = this.appconfig.editor_url; //Taking the desired API to interact with the Database

    this.getDetails();
    /* //HTTP GET method
    http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isDelete == false);
      this.content2 = this.content1.reverse();
      /* this.content3 = this.content2.filter(obj => obj.createdBy == localStorage.getItem('username')); */
      //this.content3 = this.content2.filter(obj => obj.userId.toString() == localStorage.getItem('id'));
    //}, error => console.error(error)); */
  }
 
  getDetails()
  {
    //HTTP GET method
    this.http.get(this.url).subscribe(result => {
      this.content = result.json() as ContentID[];
      this.content1 = this.content.filter(obj => obj.isDelete == false);
      this.content2 = this.content1.reverse();
      /* this.content3 = this.content2.filter(obj => obj.createdBy == localStorage.getItem('username')); */
      this.content3 = this.content2.filter(obj => obj.userId.toString() == localStorage.getItem('id'));
    }, error => console.error(error));
  }



  fetchIDs(con: any):Promise<any>{
    console.log('contentID is'+con['contentId']);
    this.trial_contentID = con['contentId']; //contentID
    this.fetchidservice.common_ContentID = this.trial_contentID;
    
    console.log('userID is'+ con['userId']);
    this.trial_User_userID = con['userId'];  //sharedBy
    this.fetchidservice.common_SharedBy = this.trial_User_userID;
    //fileID
    return this.fetchidservice.getFileID(this.trial_User_userID,this.trial_contentID)
    .toPromise()
    .then(result => {this.trial_fileID = result.json()['fileID'] as UserFileDetails[],
    console.log('fileID is '+this.trial_fileID);
    this.fetchidservice.common_FileID = this.trial_fileID;
    this.getcreatedby();
    })
    
    } 
    getcreatedby():Promise<any>{   
    return this.fetchidservice.getCreatedBy(this.trial_User_userID)
    .toPromise()
    .then(result => {this.trial_Createdby = result.json()['firstName'] as UserDetails[],
    console.log('yoyo'+this.trial_Createdby);
    this.fetchidservice.common_CreatedBy = this.trial_Createdby;
    console.log('lolololol'+ this.fetchidservice.common_CreatedBy);
    this.fake=true;})
    
    }
    openDialogshare(): void {
      
      let dialogRef = this.dialog.open(SharewithdialogComponent, {
        width: '50%',
        
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        
      });
    }

  
  ELEMENT_DATA=this.content2;

  //Function that takes the recieved object to the edit component to edit the contents further
  edit(con: ContentID) {
    this.obj.setContent(con);
  }

  //Function that recieves the incoming object and takes the object to add to or remove from favourites and also view the content in the ViewComponent
  view(content: ContentID) {
    this.con2 = content;
    this.favourite = true;
    this.favourite1 = false;
    this.obj3.show(this.con2);
    this.obj2.setFavContent(this.con2.contentId, this.con2.userId, this.con2.content, this.con2.metaTags, this.con2.isPrivate, this.con2.isGraphCreated, this.favourite, this.con2.createdBy, this.con2.createdOn, this.con2.isDelete, this.con2.modifiedOn);
    this.obj4.setFavContent(this.con2.contentId, this.con2.userId, this.con2.content, this.con2.metaTags, this.con2.isPrivate, this.con2.isGraphCreated, this.favourite, this.con2.createdBy, this.con2.createdOn, this.con2.isDelete, this.con2.modifiedOn);
  }

  //Function that adds dots to the content if it is longer than the limit
  addDots(con: ContentID) {
    this.sample = con.content;
    if (this.sample.length > this.limit) {
      this.sample = this.sample.substring(0, this.limit) + this.dots;
    }
    return this.sample;
  }

  //Function that captures the incoming object before performing the Delete operation
  preDelete(content: ContentID) {
    this.con5 = content; //Capturing the incoming object 
    this.obj5.get(this.con5); //Calling the get function of the IsDelete Service 

    //Assigning the incoming object properties to the local attributes
    this.contentIdDel = this.con5.contentId;
    this.userIdDel = this.con5.userId;
    this.conDel = this.con5.content;
    this.metaTagsDel = this.con5.metaTags;
    this.isPrivateDel = this.con5.isPrivate;
    this.isGraphCreatedDel = this.con5.isGraphCreated;
    this.isFavouritesDel = this.isFavouritesDel;
    this.createdByDel = this.con5.createdBy;
    this.createdOnDel = this.con5.createdOn;
    this.isDeleteDel = this.con5.isDelete;
    this.modifiedOnDel = this.con5.modifiedOn;
  }

  //Function to add the incoming object to the Favourites
  change(content: ContentID) {
    this.confav = content; //Capturing the incoming object in the local variable
    this.obj2.setFavContent2(this.confav); //Calling the setFavContent2 function of the PutFavService
    this.getDetails();
  }

  //Function to remove the incoming object from the Favourites
  change1(content: ContentID) {
    this.confav = content; //Capturing the incoming object in the local variable
    this.obj4.setFavContent2(this.confav); //Calling the setFavContent2 function of the RemoveFavService
    this.getDetails();
  }
  
  //To reload the opened window
  reload() {
    window.location.reload();
  }
 
  //Dialog to confirm the delete operation
  openDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });    
  }

  //Dialog to confirm that the content has been added to the Favourites
  openDialogAddFav(): void {
    let dialogRef = this.dialog.open(AddToFavDialogComponent, {
      width: '250px'
    });
 
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  //Dialog to confirm that the content has been removed from the Favourites
  openDialogRemoveFav(): void {
    let dialogRef = this.dialog.open(RemoveFromFavDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  
  captureDate(con: ContentID)
  {
    this.date = con.createdOn;
    let currentdate=Date.now();
    let difference=currentdate-this.date;
    return difference;
  }

  ngOnInit() {

    this.obj5.newUser.subscribe((res)=>{
      if(res){
     this.content3.forEach((el)=>{
       if(el.contentId==res.id){
         el.isDelete=true;
       }
     })
    } 
    })
    
    //this.dataSource=new eDataSource(this.ELEMENT_DATA);
  }

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit(){
  //   this.dataSource.paginator=this.paginator;
  // }
  contentIdshowFiles:number;

  showFiles(contentIdshow:number)
  {
    this.contentIdshowFiles=contentIdshow;

  }


}

// export class eDataSource extends DataSource<any>
// {
//   paginator: MatPaginator;

//   constructor(private con: ContentID[]){
//     super();
//   }

//   connect():Observable<ContentID[]>
//   {
//     return Observable.of(this.con);

//   }

//   disconnect(){}
// }
